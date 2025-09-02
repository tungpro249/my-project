"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const err = await res.json();
        setError(err.message || "Đăng ký thất bại");
        return;
      }

      const data = await res.json();
      setSuccess("Đăng ký thành công! Hãy đăng nhập.");
      console.log("Register success:", data);

      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError("Có lỗi xảy ra, vui lòng thử lại.");
      console.error("Register error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-96 flex flex-col gap-5 transition-colors"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
        Đăng ký
      </h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Họ và tên"
        value={username}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        required
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        required
      />

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Xác nhận mật khẩu"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
        required
      />

      {/* Submit button */}
      <button
        type="submit"
        className="bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
      >
        Đăng ký
      </button>

      {/* Link to login */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Đã có tài khoản?{" "}
        <Link
          href="/login"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          Đăng nhập ngay
        </Link>
      </p>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {success && (
        <p className="text-green-500 text-sm text-center">{success}</p>
      )}
    </form>
  );
}
