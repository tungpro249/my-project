import BlogList from "./BlogList";

export default async function AdminBlogPage() {
  const res = await fetch("http://localhost:5000/post", { cache: "no-store" });
  const blogPosts = await res.json();

  return (
    <div className="p-8">
      <p className="text-center text-3xl font-bold">Danh sách bài viết</p>
      <BlogList initialPosts={blogPosts.data} />
    </div>
  );
}
