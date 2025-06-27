import SearchForm from "@/app/components/ui/form/Search";
import { Row, Col, Card } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import Pagination from "@/app/components/ui/Pagination";
import { fetchPosts } from "@/app/services/posts/posts.services";
import { Post } from "@/app/services/posts/post.type";

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ key_search?: string; page?: string }>;
}) {
  const params = await searchParams;
  const key_search = params?.key_search || "";
  const page = parseInt(params?.page || "1", 10);
  const pageSize = 10;

  const { blogPosts, total } = await fetchPosts({ key_search, page, pageSize });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      <p className="text-center mb-8 !text-3xl !font-bold">
        Danh sách bài viết
      </p>
      <div className="mb-8">
        <SearchForm defaultValue={key_search} />
      </div>

      <Row gutter={[24, 24]}>
        {blogPosts.map((post: Post) => (
          <Col xs={24} sm={24} md={24} key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <Card
                title={
                  <div className="flex justify-between">
                    <span className="!text-xl !font-semibold">
                      {post.title}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {" "}
                      {dayjs(post.created_at).format("DD/MM/YYYY HH:mm")}
                    </span>
                  </div>
                }
                className="shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: post.short_description }}
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <div className="mt-8">
        <Pagination total={total} pageSize={pageSize} />
      </div>
    </div>
  );
}
