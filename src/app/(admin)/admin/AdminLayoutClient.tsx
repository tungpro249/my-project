"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";

export default function AdminLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("user");

    // Không có token → redirect login
    if (!token) {
      router.replace("/login");
      return;
    }

    let user;
    try {
      user = JSON.parse(token);
    } catch (error) {
      console.error("JSON parse error:", error);
      router.replace("/login");
      return;
    }

    // Không phải admin → redirect home
    if (user.role !== "admin") {
      router.replace("/");
      return;
    }

    // Ok → render admin
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl">
        Checking permission...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen dark:bg-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
