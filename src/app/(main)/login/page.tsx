"use client";
import { loginWithGoogle } from "@/app/services/auth/auth.service";
import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <button
        onClick={loginWithGoogle}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
