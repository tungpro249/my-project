import { FetchPostsParams, Post } from "./post.type";
import { GET_LIST_POST } from "./posts.api";

export async function fetchPosts({
  key_search = "",
  page = 1,
  pageSize = 10,
  category_id,
}: FetchPostsParams) {
  const url = new URL(GET_LIST_POST);
  if (key_search) {
    url.searchParams.append("key_search", key_search);
  }
  if (category_id) {
    url.searchParams.append("category_id", category_id.toString());
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

export async function createPosts({
  key_search = "",
  page = 1,
  pageSize = 10,
}: FetchPostsParams) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
  }

  const url = new URL(`${baseUrl}/posts`);
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
  if (!data.data || typeof data.total !== "number") {
    throw new Error("Invalid response format");
  }

  return {
    posts: data.data as Post[],
    total: data.total as number,
  };
}
