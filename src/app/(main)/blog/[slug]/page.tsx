import { notFound } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
}

async function getPostBySlug(id: string): Promise<BlogPost | null> {
  const res = await fetch(`http://localhost:5000/post/${id}`, {
    cache: "no-store", // để SSR luôn lấy bản mới
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data;
}

// Component trang chi tiết
export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mt-6 prose prose-lg prose-slate">
        {/* Nếu bạn render HTML từ server thì dùng dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
