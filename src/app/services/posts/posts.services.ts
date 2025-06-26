import { Post } from "./post.type";
import { GET_LIST_POST } from "./posts.api";

export async function fetchPosts(key_search: string = "") {
  const url = new URL(GET_LIST_POST);
  if (key_search) {
    url.searchParams.append("key_search", key_search);
  }
  const res = await fetch(url.toString(), {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  if (!data.data) {
    throw new Error("Invalid response format");
  }
  return data.data as Post[];
}
