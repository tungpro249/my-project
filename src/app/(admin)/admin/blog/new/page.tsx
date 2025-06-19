"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

// Import Editor với ssr: false
const Editor = dynamic(() => import("@/app/components/Editor"), {
  ssr: false,
});

interface BlogFormData {
  title: string;
  shortDescription: string;
  content: string;
}

export default function AdminBlogNewPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    shortDescription: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Giả lập gọi API để tạo bài viết
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to create post");
      router.push("/blog"); // Chuyển hướng sau khi tạo thành công
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreview = () => {
    // Lưu formData vào localStorage hoặc state để xem trước
    localStorage.setItem("blogPreview", JSON.stringify(formData));
    window.open("/blog/preview", "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-center mb-8 text-3xl font-bold text-gray-800">
        Tạo bài viết mới
      </h1>
      <div className="space-y-6">
        {/* Form tiêu đề */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tiêu đề
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập tiêu đề bài viết"
            required
          />
        </div>

        {/* Form mô tả ngắn */}
        <div>
          <label
            htmlFor="shortDescription"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mô tả ngắn
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder="Nhập mô tả ngắn cho bài viết"
          />
        </div>

        {/* Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nội dung
          </label>
          <Editor value={formData.content} onChange={handleEditorChange} />
        </div>

        {/* Nút hành động */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-lg text-white font-medium ${
              isSubmitting
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } transition-colors`}
          >
            {isSubmitting ? "Đang lưu..." : "Thêm mới"}
          </button>
          <button
            onClick={handlePreview}
            className="px-6 py-2 rounded-lg text-white font-medium bg-orange-500 hover:bg-orange-600 transition-colors"
          >
            Xem trước
          </button>
        </div>
      </div>
    </div>
  );
}
