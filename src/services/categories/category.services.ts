import { api } from "../api";
import { CATEGORIES_OPTIONS_ENDPOINT } from "./category.api";

export async function fetchCategories() {
  const res = await api.get(CATEGORIES_OPTIONS_ENDPOINT, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  return data.data;
}
