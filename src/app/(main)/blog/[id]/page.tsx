import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify"; // Use isomorphic-dompurify for SSR

interface BlogPost {
  id: number;
  title: string;
  description?: string;
  content: string;
  slug: string;
}

async function getPostBySlug(id: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`http://localhost:5000/post/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`API error: ${res.status} ${res.statusText}`);
      return null;
    }

    const response = await res.json();
    const post: BlogPost = response.data;

    if (!post || !post.content) {
      console.error("Invalid post data:", post);
      return null;
    }

    return post;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPostBySlug(params.id);

  if (!post) return notFound();

  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div className="mt-6 prose prose-lg prose-slate">
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      </div>
    </div>
  );
}