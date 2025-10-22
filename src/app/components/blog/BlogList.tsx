"use client";

import { useState } from "react";
import { Button, Popconfirm, Table, message } from "antd";
import Link from "next/link";
import { Post } from "@/app/services/posts/post.type";

export default function BlogList({ initialPosts }: { initialPosts: any[] }) {
  const [posts, setPosts] = useState<any>(initialPosts);

  const handleDelete = async (id: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/post/${id}`,
      {
        method: "DELETE",
      },
    );
    if (res.ok) {
      message.success("Xóa bài viết thành công");
      setPosts((prev: any) => prev.filter((p: any) => p.id !== id));
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
      render: (_: unknown, record: any) => (
        <div className="flex gap-2">
          <Link href={`/admin/blog/${record.id}`}>
            <Button type="primary">Sửa</Button>
          </Link>
          <Popconfirm
            title="Xác nhận xóa"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={posts} columns={columns} />
      {/* <div className="mt-8">
        <Pagination total={total} pageSize={posts.pageSize} />
      </div> */}
    </>
  );
}
