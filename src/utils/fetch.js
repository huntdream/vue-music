export default function apiFetch(url, options) {
  return fetch(url, options).then(res => res.json()).catch((err) => {
    if (err) throw err;
  });
}