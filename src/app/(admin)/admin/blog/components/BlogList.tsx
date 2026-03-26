"use client";

import { useState } from "react";
import { Button, Popconfirm, Table, message } from "antd";
import Link from "next/link";
import { Post } from "@/types/post.type";
import { api } from "@/services/api";

export default function BlogList({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleDelete = async (id: string) => {
    const res = await api.delete(`/post/${id}`);
    if (res.ok) {
      message.success("Xóa bài viết thành công");
      setPosts((prev) => prev.filter((p) => p.id.toString() !== id));
    } else {
      message.error("Xóa thất bại");
    }
  };
  const columns = [
    {
      title: "STT",
      key: "stt",
      render: (_: unknown, __: Post, index: number) => index + 1,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_: unknown, record: Post) => (
        <div className="flex gap-2">
          <Link href={`/admin/blog/${record.slug}`}>
            <Button type="primary">Sửa</Button>
          </Link>
          <Popconfirm
            title="Xác nhận xóa"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() => handleDelete(String(record.id))}
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return <Table dataSource={posts} columns={columns} rowKey="id" />;
}
