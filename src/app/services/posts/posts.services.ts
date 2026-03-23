import { api } from "../api";
import { POSTS_ENDPOINT } from "./posts.api";
import { FetchPostsParams, Post } from "./post.type";

export async function fetchPosts({
  key_search = "",
  page = 1,
  pageSize = 10,
  category_id,
}: FetchPostsParams) {
  const url = new URL(POSTS_ENDPOINT);
  if (key_search) {
    url.searchParams.append("key_search", key_search);
  }
  if (category_id) {
    url.searchParams.append("category_id", category_id.toString());
  }
  url.searchParams.append("page", page.toString());
  url.searchParams.append("pageSize", pageSize.toString());

  const res = await api.get(url.toString(), { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return {
    blogPosts: data.data as Post[],
    total: data.pagination.totalItems as number,
  };
}

export async function fetchPostBySlug(slug: string) {
  const res = await api.get(`${POSTS_ENDPOINT}/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  const data = await res.json();
  return data.data;
}

export async function createPost(postData: {
  title: string;
  short_description?: string;
  content: string;
  category_id: string;
}) {
  const res = await api.post("/post", postData);
  if (!res.ok) {
    throw new Error("Failed to create post");
  }
  return res.json();
}
