// src/components/admin/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/blog", label: "Bài viết", icon: "📝" },
  { href: "/admin/blog/new", label: "Tạo bài viết", icon: "✍️" },
  { href: "/admin/category", label: "Danh mục", icon: "🗂️" },
  { href: "/admin/settings", label: "Cài đặt", icon: "⚙️" },
  { href: "/", label: "Trang chủ", icon: "🏠" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4 space-y-2">
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "block px-4 py-2 rounded hover:bg-gray-100",
              pathname === href && "bg-gray-200 font-semibold",
            )}
          >
            {icon} {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
