// src/components/admin/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/blog", label: "Bài viết" },
  { href: "/admin/blog/new", label: "Tạo bài viết" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4 space-y-2">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "block px-4 py-2 rounded hover:bg-gray-100",
              pathname === href && "bg-gray-200 font-semibold"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
