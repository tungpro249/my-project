"use client";

import React, { useState } from "react";
import Editor from "@/app/components/Editor";
export default function CreateNewBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
    };

    console.log("Submit post:", newPost);
    // TODO: gọi API POST lên server
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Tạo bài viết mới</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Tiêu đề
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tiêu đề bài viết..."
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Mô tả
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Nhập tiêu đề bài viết..."
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        {/* Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nội dung
          </label>
          <Editor value={content} onChange={setContent} />
        </div>

        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 focus:outline-none"
          >
            Đăng bài
          </button>
        </div>
      </form>
    </div>
  );
}
