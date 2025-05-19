import { Button, Card, Col, Row } from "antd";
import Link from "next/link";
import DOMPurify from 'dompurify';

export default async function AdminBlogPage() {
  const res = await fetch("http://localhost:5000/post", { cache: "no-store" });
  const blogPosts = await res.json();

  return (
    <div className="max-w-full mx-auto px-4 py-8 bg-white">
      <p className="text-center mb-8 !text-3xl !font-bold">
        Danh sách bài viết
      </p>
      <Row gutter={[24, 24]}>
        {blogPosts.data.map((post: any) => (
          <Col xs={24} sm={24} md={24} key={post.id}>
            <Card
              title={
                <span className="!text-xl !font-semibold">{post.title}</span>
              }
              className="shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
              <Link href={`/post/${post.id}`}>
                <Button type="primary" className="">
                  Sửa bài viết
                </Button>
                <Button type="primary" className="">
                  Đọc tiếp
                </Button>
                <Button type="primary" className="!bg-red-500">
                  Xóa bài viết
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
