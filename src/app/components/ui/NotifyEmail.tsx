"use client";
import { useState } from "react";
import { message } from "antd";
import { registerNotification } from "@/app/services/contact/contact.services";
import { useLoadingStore } from "@/app/stores/useLoadingStore";

export const NotifyEmail = () => {
  const [email, setEmail] = useState("");
  const [, setLoading] = useState(false);

  const { show, hide } = useLoadingStore();

  const handleSendEmail = async () => {
    if (!email) {
      message.error("Vui lòng nhập email");
      return;
    }

    setLoading(true);
    try {
      show();
      await registerNotification(email);
      message.success("Gửi email thành công");
      setEmail("");
      hide();
    } catch (error) {
      message.error("Gửi email thất bại");
      console.log("Failed to send email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
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
