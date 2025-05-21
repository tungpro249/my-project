// app/admin/blog/BlogList.tsx (Client Component)
"use client";

import { useState } from "react";
import { Button, Card, Col, Row, message } from "antd";
import Link from "next/link";

export default function BlogList({ initialPosts }: { initialPosts: any[] }) {
  const [posts, setPosts] = useState(initialPosts);

  const handleDelete = async (id: string) => {
    const res = await fetch(`http://localhost:5000/post/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      message.success("Xóa bài viết thành công");
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } else {
      message.error("Xóa thất bại");
    }
  };

  return (
    <Row gutter={[24, 24]}>
      {posts.map((post) => (
        <Col key={post.id} xs={24}>
          <Card title={post.title}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
  );
}
