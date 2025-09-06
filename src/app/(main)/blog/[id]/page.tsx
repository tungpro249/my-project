import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify"; // Use isomorphic-dompurify for SSR
import PostSimilar from "@/app/components/PostSimilar";
import { Post } from "@/app/services/posts/post.type";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  return {
    title: `Blog ${id}`,
    description: `${id}`,
  };
};

async function getPostBySlug(id: string): Promise<Post | null> {
  try {
    const baseUrl =
      process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      console.error(
        "Missing API base URL (set API_BASE_URL or NEXT_PUBLIC_API_BASE_URL)",
      );
      return null;
    }
    const res = await fetch(`${baseUrl}/post/${encodeURIComponent(id)}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`API error: ${res.status} ${res.statusText}`);
      return null;
    }

    const response = await res.json();
    const post: Post = response.data;

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

export default async function BlogDetailPage({ params }: any) {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) return notFound();

  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <div className="mt-6 prose prose-lg prose-slate dark:prose-invert max-w-none dark:text-[#fff]">
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>
        </div>
      </div>
      <PostSimilar />
    </>
  );
}
