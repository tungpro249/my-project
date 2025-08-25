"use client";
import { loginWithGoogle } from "@/app/services/auth/auth.service";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <form className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 w-96 flex flex-col gap-5 transition-colors">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Đăng nhập
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Mật khẩu"
          className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          required
        />

        {/* Login button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Đăng nhập
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Hoặc</span>
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
        </div>

        {/* Social login */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={loginWithGoogle}
            className="flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            <FcGoogle size={20} />
            <span className="text-gray-700 dark:text-gray-100">
              Đăng nhập bằng Google
            </span>
          </button>

          <button
            type="button"
            onClick={loginWithGoogle}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition"
          >
            <FaFacebook size={20} />
            <span>Đăng nhập bằng Facebook</span>
          </button>
        </div>
      </form>
    </div>
  );
}
