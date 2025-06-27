import { GET_LIST_CATEGORY } from "./category.api";

export async function fetchCategories() {
  const res = await fetch(GET_LIST_CATEGORY, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  return data.data;
}
