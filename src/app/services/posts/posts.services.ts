import { Post } from "./post.type";
import { GET_LIST_POST } from "./posts.api";

export async function fetchPosts() {
  const res = await fetch(GET_LIST_POST, {
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
