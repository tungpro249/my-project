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
      <div className="max-w-2xl mx-auto">
        <Editor onChange={() => {}} value="" />
      </div>
    </div>
  );
}
