export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const targetUrl = `https://henrryyes-grok.hf.space${url.pathname}${url.search}`;

  // 创建一个新的请求，转发到 Hugging Face Spaces
  return fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  });
}
