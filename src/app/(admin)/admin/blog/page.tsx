import { fetchPosts } from "@/app/services/posts/posts.services";
import BlogList from "./components/BlogList";

export default async function AdminBlogPage({
  searchParams,
}: {
  searchParams?: Promise<{
    key_search?: string;
    page?: string;
    pageSize?: string;
  }>;
}) {
  const params = await searchParams;
  const page = parseInt(params?.page || "1", 10);
  const pageSize = parseInt(params?.pageSize || "10", 10);
  const { blogPosts } = await fetchPosts({ page, pageSize });

  return (
    <div className="p-8">
      <p className="text-gray-800 mb-8 text-3xl font-bold">
        Danh sách bài viết
      </p>
      <BlogList initialPosts={blogPosts} />
    </div>
  );
}
