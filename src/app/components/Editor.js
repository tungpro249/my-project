"use client";

import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// interface EditorProps {
//   value: string;
//   onChange: (data: string) => void;
// }

export default function Editor({ value, onChange }) {
  const [data, setData] = useState(value);

  // Đồng bộ value từ props với state
  useEffect(() => {
    setData(value);
  }, [value]);

  return (
    <div className="editor-container">
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          const newData = editor.getData();
          setData(newData);
          onChange(newData);
        }}
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "blockQuote",
            "insertTable",
            "undo",
            "redo",
          ],
          placeholder: "Nhập nội dung bài viết...",
        }}
      />
      <style jsx global>{`
        .editor-container {
          width: 100%;
          margin-bottom: 1rem;
        }
        .editor-container :global(.ck-editor__editable) {
          min-height: 400px;
          max-height: 600px;
          overflow-y: auto;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 1rem;
        }
        .editor-container :global(.ck-toolbar) {
          border-radius: 0.5rem 0.5rem 0 0;
          background: #f9fafb;
        }
      `}</style>
    </div>
  );
}
