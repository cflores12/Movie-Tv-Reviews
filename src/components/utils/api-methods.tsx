async function request<TResponse>(
  url: string,
  config: RequestInit
): Promise<TResponse> {
  const response = await fetch(url, config);
  return await response.json();
}

const api = {
  get: <TResponse,>(url: string) => request<TResponse>(url, { method: "GET" }),

  // Using `extends` to set a type constraint:
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "POST", body }),
};

export default api;
