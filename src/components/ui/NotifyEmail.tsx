"use client";
import { useState } from "react";
import { message } from "antd";
import { registerNotification } from "@/services/contact/contact.services";
import { useLoadingStore } from "@/stores/useLoadingStore";

export const NotifyEmail = () => {
  const [email, setEmail] = useState("");
  const [, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const { show, hide } = useLoadingStore();

  const handleSendEmail = async () => {
    if (!email) {
      messageApi.error("Vui lòng nhập email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      messageApi.error("Email không hợp lệ");
      return;
    }

    setLoading(true);
    try {
      show();
      await registerNotification(email);
      setEmail("");
      messageApi.success("Gửi email thành công");
    } catch (error) {
      console.error("Failed to send email:", error);
      messageApi.error("Gửi email thất bại");
    } finally {
      hide();
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      {contextHolder}
      <h3 className="text-gray-800 dark:text-white text-xl font-semibold">
        Nhận email thông báo
      </h3>
      <div className="mt-4 flex justify-center w-full">
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 w-full rounded-l-md focus:outline-none text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800"
        />
        <button
          onClick={handleSendEmail}
          className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition"
        >
          Gửi
        </button>
      </div>
    </div>
  );
};
