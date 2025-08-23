const BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(
  /\/+$/,
  "",
);
if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}
const GET_LIST_CATEGORY = `${BASE_URL}/categories/options`;
const CREATE_CATEGORY = `${BASE_URL}/categories`;
const UPDATE_CATEGORY = `${BASE_URL}/categories`;
const DELETE_CATEGORY = `${BASE_URL}/categories`;

export { GET_LIST_CATEGORY, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY };
