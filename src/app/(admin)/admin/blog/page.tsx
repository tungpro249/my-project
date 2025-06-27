import { fetchPosts } from "@/app/services/posts/posts.services";
import BlogList from "./BlogList";

export default async function AdminBlogPage() {
  const pageSize = 10;
  const blogPosts = await fetchPosts({ pageSize });
console.log('blogPosts',blogPosts)
  return (
    <div className="p-8">
      <p className="text-center text-3xl font-bold">Danh sách bài viết</p>
      <BlogList initialPosts={blogPosts} />
    </div>
  );
}
