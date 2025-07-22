// app/admin/blog/BlogList.tsx (Client Component)
"use client";

import { useState } from "react";
import { Button, Table, message } from "antd";
import Link from "next/link";

export default function BlogList({
  initialPosts,
}: {
  initialPosts: any[];
}) {
  const [posts, setPosts] = useState<any>(initialPosts);

  const handleDelete = async (id: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/post/${id}`,
      {
        method: "DELETE",
      }
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
      key: "id",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Link href={`/post/${record.id}`}>
            <Button type="primary">Sửa</Button>
          </Link>
          <Button danger onClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
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
