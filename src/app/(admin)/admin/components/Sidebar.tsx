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
    <aside className="w-64 bg-white dark:bg-gray-900 dark:text-gray-100 shadow-md">
      <nav className="p-4 space-y-2">
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
              "hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-400",
              pathname === href &&
                "bg-gray-200 font-semibold dark:bg-gray-800 dark:text-blue-400",
            )}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
