import DOMPurify from "isomorphic-dompurify";
import { Row, Col, Card } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import { Post } from "@/app/services/posts/post.type";

interface PostCardListProps {
  posts: Post[];
}

export default function PostCardList({ posts }: PostCardListProps) {
  return (
    <Row gutter={[24, 24]}>
      {posts.map((post: Post) => (
        <Col xs={24} sm={24} md={24} key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <Card
              title={
                <div className="flex justify-between">
                  <span className="!text-xl !font-semibold">{post.title}</span>
                  <span className="text-gray-500 text-sm dark:text-gray-400">
                    {dayjs(post.created_at).format("DD/MM/YYYY HH:mm")}
                  </span>
                </div>
              }
              className="shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300
                         dark:bg-gray-800 dark:border-gray-700"
            >
              <div
                className="prose dark:prose-invert"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.short_description),
                }}
              />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
