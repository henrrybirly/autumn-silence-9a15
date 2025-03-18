export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  
  // 移除 /proxy 前缀（如果存在）
  let pathname = url.pathname;
  if (pathname.startsWith('/proxy')) {
    pathname = pathname.substring(6); // 移除 "/proxy"
  }
  
  const targetUrl = `https://henrryyes-grok.hf.space${pathname}${url.search}`;
  
  console.log(`Proxying request to: ${targetUrl}`);
  
  // 创建一个新的请求，转发到 Hugging Face Spaces
  return fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  });
}
