import { Layout, Row, Col, Typography, Card, Button } from "antd";
import Link from "next/link";

export default async function BlogPage() {
  const res = await fetch("http://localhost:5000/post", { cache: "no-store" });
  const blogPosts = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      <p className="text-center mb-8 !text-3xl !font-bold">
        Danh sách bài viết
      </p>
      <Row gutter={[24, 24]}>
        {blogPosts.data.map((post: any) => (
          <Col xs={24} sm={12} md={8} key={post.id}>
            <Card
              title={<span className="!text-xl !font-semibold">{post.title}</span>}
              className="shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <p className="block mb-4">{post.content}</p>
              <Link href={`/post/${post.id}`}>
                <Button type="primary" className="w-full">
                  Đọc tiếp
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
