"use client";

import dynamic from "next/dynamic";

// Import Editor với ssr: false
const Editor = dynamic(() => import("@/app/components/Editor"), {
  ssr: false,
});

export default function AdminBlogNewPage() {
  return (
    <div className="max-w-full mx-auto px-4 py-8 bg-white">
      <h1 className="text-center mb-8 !text-3xl !font-bold">
        Tạo bài viết mới
      </h1>
      <div className="w-full mx-auto">
        <Editor onChange={() => {}} value="" />
      </div>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Thêm mới
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4">
          Xem trước
        </button>
      </div>
    </div>
  );
}
