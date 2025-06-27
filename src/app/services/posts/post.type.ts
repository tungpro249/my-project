export interface Post {
  id: number;
  title: string;
  short_description: string;
  content: string;
  slug: string;
  created_at?: string;
}

export interface FetchPostsParams {
  key_search?: string;
  page?: number;
  pageSize?: number;
}
