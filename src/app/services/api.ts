const BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(
  /\/+$/,
  "",
);

if (!BASE_URL) {
  throw new Error(
    "Missing API base URL (set NEXT_PUBLIC_API_BASE_URL in .env)",
  );
}

export { BASE_URL };

type RequestOptions = Omit<RequestInit, "method" | "body"> & {
  token?: string;
};

async function request<T = any>(
  endpoint: string,
  method: string,
  body?: unknown,
  options: RequestOptions = {},
): Promise<Response> {
  const { token, headers: customHeaders, ...restOptions } = options;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...customHeaders,
  };

  // Auto-attach token from localStorage (client-side) or passed token
  const authToken =
    token ??
    (typeof window !== "undefined"
      ? localStorage.getItem("access_token")
      : null);

  if (authToken) {
    (headers as Record<string, string>)["Authorization"] =
      `Bearer ${authToken}`;
  }

  const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    ...restOptions,
  });

  return res;
}

export const api = {
  get: (endpoint: string, options?: RequestOptions) =>
    request(endpoint, "GET", undefined, options),

  post: (endpoint: string, body?: unknown, options?: RequestOptions) =>
    request(endpoint, "POST", body, options),

  put: (endpoint: string, body?: unknown, options?: RequestOptions) =>
    request(endpoint, "PUT", body, options),

  delete: (endpoint: string, options?: RequestOptions) =>
    request(endpoint, "DELETE", undefined, options),
};
