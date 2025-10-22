// app/admin/AdminLayoutClient.tsx
"use client";

// import { useRouter, usePathname } from "next/navigation";
import { type ReactNode } from "react";
import Sidebar from "@/app/components/admin/Sidebar";

export default function AdminLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  // const router = useRouter();
  // const pathname = usePathname();

  // useEffect(() => {
  //   const isAuth = document.cookie.includes("admin-auth=true");
  //   if (!isAuth) {
  //     router.push("/admin-login");
  //   }
  // }, [pathname]);

  return (
    <div className="flex min-h-screen dark:bg-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
