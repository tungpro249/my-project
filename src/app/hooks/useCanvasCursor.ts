"use client";

import { useEffect } from "react";

export default function useCanvasCursor(): void {
  useEffect(() => {
    // -- Mutable state used by animation (kept inside effect to avoid deps) --
    let ctx: CanvasRenderingContext2D | null = null;
    let f: Wave | null = null;
    let eValue = 0;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let lines: Line[] = [];

    const E = {
      debug: true,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };

    // -- Classes converted to proper TypeScript classes --
    class Wave {
      phase: number;
      offset: number;
      frequency: number;
      amplitude: number;
      private _value: number;

      constructor(opts: Partial<{ phase: number; offset: number; frequency: number; amplitude: number }> = {}) {
        this.phase = opts.phase ?? 0;
        this.offset = opts.offset ?? 0;
        this.frequency = opts.frequency ?? 0.001;
        this.amplitude = opts.amplitude ?? 1;
        this._value = this.offset;
      }

      update(): number {
        this.phase += this.frequency;
        this._value = this.offset + Math.sin(this.phase) * this.amplitude;
        return this._value;
      }

      value(): number {
        return this._value;
      }
    }

    class Node {
      x = 0;
      y = 0;
      vx = 0;
      vy = 0;
    }

    class Line {
      spring: number;
      friction: number;
      nodes: Node[] = [];

      constructor(opts: Partial<{ spring: number }> = {}) {
        // add small randomness like original
        this.spring = (opts.spring ?? 0.4) + 0.1 * Math.random() - 0.02;
        this.friction = E.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        for (let n = 0; n < E.size; n++) {
          const node = new Node();
          node.x = pos.x;
          node.y = pos.y;
          this.nodes.push(node);
        }
      }

      update() {
        let spring = this.spring;
        let t = this.nodes[0];
        t.vx += (pos.x - t.x) * spring;
        t.vy += (pos.y - t.y) * spring;

        for (let i = 0, a = this.nodes.length; i < a; i++) {
          t = this.nodes[i];
          if (i > 0) {
            const nNode = this.nodes[i - 1];
            t.vx += (nNode.x - t.x) * spring;
            t.vy += (nNode.y - t.y) * spring;
            t.vx += nNode.vx * E.dampening;
            t.vy += nNode.vy * E.dampening;
          }
          t.vx *= this.friction;
          t.vy *= this.friction;
          t.x += t.vx;
          t.y += t.vy;
          spring *= E.tension;
        }
      }

      draw() {
        if (!ctx) return;
        let eNode: Node;
        let tNode: Node;
        let nX = this.nodes[0].x;
        let nY = this.nodes[0].y;
        ctx.beginPath();
        ctx.moveTo(nX, nY);

        // draw using quadratic curves
        const last = this.nodes.length - 1;
        for (let a = 1; a < last; a++) {
          eNode = this.nodes[a];
          tNode = this.nodes[a + 1];
          nX = 0.5 * (eNode.x + tNode.x);
          nY = 0.5 * (eNode.y + tNode.y);
          ctx.quadraticCurveTo(eNode.x, eNode.y, nX, nY);
        }

        // last segment: ensure it ends at last node
        const e = this.nodes[last - 1];
        const t = this.nodes[last];
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);

        ctx.stroke();
        ctx.closePath();
      }
    }

    // -- DOM / canvas helpers --
    function resizeCanvas() {
      if (!ctx) return;
      const canvas = ctx.canvas;
      // keep small padding like original
      canvas.width = window.innerWidth - 20;
      canvas.height = window.innerHeight;
    }

    // render loop
    function render() {
      if (!ctx) return;
      if ((ctx as any).running) {
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "lighter";
        // safe-check f
        const hue = Math.round(f?.update() ?? eValue);
        ctx.strokeStyle = `hsla(${hue},50%,50%,0.2)`;
        ctx.lineWidth = 1;

        for (let t = 0; t < E.trails; t++) {
          const line = lines[t];
          if (!line) continue;
          line.update();
          line.draw();
        }

        (ctx as any).frame = ((ctx as any).frame || 0) + 1;
        window.requestAnimationFrame(render);
      }
    }

    // mouse/touch handlers
    function createLines() {
      lines = [];
      for (let i = 0; i < E.trails; i++) {
        lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
      }
    }

    function updatePosFromEvent(ev: MouseEvent | TouchEvent) {
      if ((ev as TouchEvent).touches && (ev as TouchEvent).touches.length) {
        const t = (ev as TouchEvent).touches[0];
        pos.x = t.pageX;
        pos.y = t.pageY;
      } else if (ev instanceof MouseEvent) {
        pos.x = ev.clientX;
        pos.y = ev.clientY;
      }
    }

    function onMoveEvent(ev: MouseEvent | TouchEvent) {
      ev.preventDefault();
      updatePosFromEvent(ev);
    }

    function onTouchStartSingle(ev: TouchEvent) {
      if (ev.touches && ev.touches.length === 1) {
        pos.x = ev.touches[0].pageX;
        pos.y = ev.touches[0].pageY;
      }
    }

    function onMousemoveInit(e: MouseEvent | TouchEvent) {
      // remove the initial listeners that trigger initialization
      document.removeEventListener("mousemove", onMousemoveInit);
      document.removeEventListener("touchstart", onMousemoveInit);

      // add the active move listeners
      document.addEventListener("mousemove", onMoveEvent, { passive: false });
      document.addEventListener("touchmove", onMoveEvent, { passive: false });
      document.addEventListener("touchstart", onTouchStartSingle, { passive: false });

      updatePosFromEvent(e);
      createLines();
      render();
    }

    // focus / blur handlers
    function onWindowFocus() {
      if (!ctx) return;
      if (!(ctx as any).running) {
        (ctx as any).running = true;
        render();
      }
    }
    function onWindowBlur() {
      if (!ctx) return;
      // stop running to save CPU (original had ctx.running = true on blur, that seems wrong)
      (ctx as any).running = false;
    }

    // initialization
    function initCanvas() {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
      if (!canvas) return;
      const c = canvas.getContext("2d");
      if (!c) return;
      ctx = c;
      (ctx as any).running = true;
      (ctx as any).frame = 1;

      f = new Wave({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
      });

      // initial listeners that wait for first interaction (then switch to active handlers)
      document.addEventListener("mousemove", onMousemoveInit);
      document.addEventListener("touchstart", onMousemoveInit);
      document.body.addEventListener("orientationchange", resizeCanvas);
      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("focus", onWindowFocus);
      window.addEventListener("blur", onWindowBlur);

      resizeCanvas();
    }

    // start
    initCanvas();

    // cleanup
    return () => {
      if (ctx) (ctx as any).running = false;
      document.removeEventListener("mousemove", onMousemoveInit);
      document.removeEventListener("touchstart", onMousemoveInit);

      document.removeEventListener("mousemove", onMoveEvent);
      document.removeEventListener("touchmove", onMoveEvent);
      document.removeEventListener("touchstart", onTouchStartSingle);

      document.body.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", onWindowFocus);
      window.removeEventListener("blur", onWindowBlur);
    };
    // empty deps: all used items are scoped inside effect
  }, []);
}
