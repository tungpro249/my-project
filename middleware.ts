import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  // Nếu không có token → redirect về trang login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Giả sử token chứa role = admin
  const user = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString(),
  );
  if (user.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Nếu hợp lệ thì cho phép vào
  return NextResponse.next();
}

// Chỉ chạy middleware cho các đường dẫn /admin/*
export const config = {
  matcher: ["/admin/(.*)"],
};
