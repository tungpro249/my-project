import { FetchPostsParams, Post } from "./post.type";
import { GET_LIST_POST } from "./posts.api";

export async function fetchPosts({
  key_search = "",
  page = 1,
  pageSize = 10,
}: FetchPostsParams) {
  const url = new URL(GET_LIST_POST);
  if (key_search) {
    url.searchParams.append("key_search", key_search);
  }
  url.searchParams.append("page", page.toString());
  url.searchParams.append("pageSize", pageSize.toString());
  const res = await fetch(url.toString(), {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  // if (!data.data || typeof data.total !== "number") {
  //   throw new Error("Invalid response format");
  // }
  return {
    blogPosts: data.data as Post[],
    total: data.pagination.totalItems as number,
  };
}
