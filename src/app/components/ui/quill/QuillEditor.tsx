"use client";

import dynamic from "next/dynamic";
import { FC } from "react";

const QuillNoSSR = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const QuillEditor: FC<Props> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "code-block",
  ];

  return (
    <QuillNoSSR
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
    />
  );
};

export default QuillEditor;
