const updateQueryString = function (url, key, value) {
  const newUrl = new URL(url);
  newUrl.searchParams.set(key, value);
  return newUrl;
};
const result = updateQueryString(
  "https://example.com/search?q=query&sort=ascending&page=2",
  "mike",
  "18",
);
console.log(result);
