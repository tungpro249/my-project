import SearchForm from "@/app/components/ui/form/Search";
import Pagination from "@/app/components/ui/Pagination";
import { fetchPosts } from "@/app/services/posts/posts.services";
import GlobalLoading from "../components/ui/GlobalLoading";
import PostCardList from "@/app/(main)/blog/components/PostCardList";

export const metadata = {
  title: "Blog",
  description: "Đây là trang danh sách blog.",
};

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{
    key_search?: string;
    page?: string;
    pageSize?: string;
    category_id?: string;
  }>;
}) {
  const params = await searchParams;
  const key_search = params?.key_search || "";
  const page = parseInt(params?.page || "1", 10);
  const pageSize = parseInt(params?.pageSize || "10", 10);
  const rawId = params?.category_id;
  const category_id =
    rawId && !isNaN(parseInt(rawId)) ? parseInt(rawId, 10) : undefined;

  const { blogPosts, total } = await fetchPosts({
    key_search,
    page,
    pageSize,
    category_id,
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <GlobalLoading />
      <p className="text-center mb-8 !text-3xl !font-bold text-gray-800 dark:text-gray-100">
        Danh sách bài viết
      </p>
      <div className="mb-8">
        <SearchForm defaultValue={key_search} />
      </div>

      <PostCardList posts={blogPosts} />

      <div className="mt-8">
        <Pagination total={total} pageSize={pageSize} />
      </div>
    </div>
  );
}
