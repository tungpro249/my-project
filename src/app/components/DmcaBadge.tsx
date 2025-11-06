// components/DmcaBadge.tsx
"use client";
import { useEffect } from "react";

export default function DmcaBadge() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://images.dmca.com/Badges/DMCABadgeHelper.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <a
      href="//www.dmca.com/Protection/Status.aspx?ID=057d307d-15c2-4802-a020-f5b08ea187d6"
      title="DMCA.com Protection Status"
      className="dmca-badge"
    >
      <img
        src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=057d307d-15c2-4802-a020-f5b08ea187d6"
        alt="DMCA.com Protection Status"
      />
    </a>
  );
}
