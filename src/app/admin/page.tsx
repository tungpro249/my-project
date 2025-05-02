"use client";
import Editor from "../components/Editor";
export default function Page() {
  return (
    <div className="container my-10 mx-auto">
      <h1>Thêm mới bài viết</h1>
      <Editor onChange={(data) => console.log(data)} />
    </div>
  );
}
