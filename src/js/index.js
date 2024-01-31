function parseUrl(url) {
  const parsedUrl = new URL(url);
  return {
    href: parsedUrl.href,
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    pathname: parsedUrl.pathname,
    search: parsedUrl.search,
    hash: parsedUrl.hash,
    origin: parsedUrl.origin,
  };
}

const result = parseUrl("https://example.com:8080/path/name?query=123#hash");
console.log(result);

const yourUrl = function () {
  return {
    href: window.location.href,
    protocol: window.location.protocol,
    host: window.location.host,
    hostname: window.location.hostname,
    port: window.location.port,
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    origin: window.location.origin,
  };
};

console.log(yourUrl());
