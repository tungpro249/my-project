// app/admin/blog/BlogList.tsx (Client Component)
"use client";

import { useState } from "react";
import { Button, Card, Col, Row, message } from "antd";
import Link from "next/link";
import Pagination from "@/app/components/ui/Pagination";

export default function BlogList({
  initialPosts,
  total,
}: {
  initialPosts: any[];
  total: number;
}) {
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

  return (
    <>
      <Row gutter={[24, 24]}>
        {posts.map((post: any) => (
          <Col key={post.id} xs={24}>
            <Card title={post.title}>
              <div
                dangerouslySetInnerHTML={{ __html: post.short_description }}
              />
              <div className="flex gap-2 mt-2">
                <Link href={`/post/${post.id}`}>
                  <Button type="primary">Sửa</Button>
                </Link>
                <Button danger onClick={() => handleDelete(post.id)}>
                  Xóa
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="mt-8">
        <Pagination total={total} pageSize={posts.pageSize} />
      </div>
    </>
  );
}
