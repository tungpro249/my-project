"use client";

import { useState } from "react";
import CategorySelect from "../ui/CategorySelect";
import QuillEditor from "../ui/quill/QuillEditor";
import { createPost } from "@/app/services/posts/posts.services";

export default function CreateNewBlogClient() {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [category_id, setCategory_id] = useState<number>();
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost({
      title,
      content,
      category_id: String(category_id),
      short_description: shortDescription,
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Tạo bài viết mới</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tiêu đề"
        />

        {/* Description */}
        <input
          className="border p-2 w-full"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          placeholder="Mô tả ngắn"
        />

        {/* Category */}
        <CategorySelect value={category_id} onChange={setCategory_id} />

        {/* Quill Editor */}
        <QuillEditor value={content} onChange={setContent} />

        <button
          type="submit"
          className="bg-indigo-600 px-4 py-2 text-white rounded"
        >
          Đăng bài
        </button>
      </form>
    </div>
  );
}
