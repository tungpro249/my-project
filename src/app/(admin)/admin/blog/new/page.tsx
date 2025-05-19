"use client";

import Editor from "@/app/components/Editor";

export default function AdminBlogNewPage() {
  return (
    <div className="max-w-full mx-auto px-4 py-8 bg-white">
      <h1 className="text-center mb-8 !text-3xl !font-bold">
        Tạo bài viết mới
      </h1>
      <div className="max-w-2xl mx-auto">
        <Editor onChange={() => {}} value="" />
      </div>
    </div>
  );
}
