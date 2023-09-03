async function apiPost(url, data) {
  let resp = await fetch(url, {
    method: "POST",
    body: data,
  });
  return resp.text();
}

export { apiPost };
