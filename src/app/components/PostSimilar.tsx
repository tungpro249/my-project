import { Row, Col, Card } from "antd";
import Link from "next/link";
import dayjs from "dayjs";

interface Post {
  id: number;
  title: string;
  short_description: string;
  content: string;
  slug: string;
  created_at: string;
}

export default async function PostSimilar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/post`, {
    cache: "no-store",
  });
  const blogPosts = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">
        Bài viết liên quan
      </h2>
      <Row gutter={[24, 24]}>
        {blogPosts.data.slice(0, 6).map((post: Post) => (
          <Col key={post.id} xs={24} sm={12} md={8}>
            <Link href={`/blog/${post.slug}`}>
              <Card
                hoverable
                className="shadow-md rounded-lg transition-shadow duration-300 h-full"
              >
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {dayjs(post.created_at).format("DD/MM/YYYY HH:mm")}
                  </p>
                </div>
                <div
                  className="text-gray-700 text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.short_description }}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
