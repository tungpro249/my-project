"use client";

import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Editor({ onChange, value = "" }) {
  const [data, setData] = useState(value);

  return (
    <div className="editor-container">
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          const data = editor.getData();
          setData(data);
          if (onChange) onChange(data);
        }}
      />
      <style jsx>{`
        .editor-container {
          height: 75vh; /* Chiều cao 75% của viewport */
        }
        .editor-container :global(.ck-editor__editable) {
          min-height: 50vh; /* Chiều cao tối thiểu bằng container */
          max-height: 50vh; /* Chiều cao tối đa bằng container */
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}
