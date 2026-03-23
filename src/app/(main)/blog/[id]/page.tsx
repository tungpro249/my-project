import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import PostSimilar from "@/app/components/PostSimilar";
import { Post } from "@/app/services/posts/post.type";
import { Metadata } from "next";
import { fetchPostBySlug } from "@/app/services/posts/posts.services";

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

export default async function BlogDetailPage({ params }: any) {
  const { id } = await params;
  const post = await fetchPostBySlug(id);

  if (!post) return notFound();

  const sanitizedContent = DOMPurify.sanitize(post.content);

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            {post.title}
          </h1>
          <div className="mt-6 prose prose-lg prose-slate dark:prose-invert max-w-none dark:text-[#fff] text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </div>
        </div>
      </div>
      <PostSimilar />
    </>
  );
}
