// Retrieve params via url.search, passed into constructor
const url = new URL("https://example.com?foo=1&bar=2");
const params1 = new URLSearchParams(url.search);
// console.log(params1);
// console.log(params1.entries())
console.log(Array.from(params1.entries()))
console.log(Object.fromEntries(params1.entries()))

// Get the URLSearchParams object directly from a URL object
const params1a = url.searchParams;
// console.log(params1a);

// Pass in a string literal
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");
// console.log(params2);
// console.log(params2a);

// Pass in a sequence of pairs
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);
console.log({ params3 });

// Pass in a record
const params4 = new URLSearchParams({ foo: "1", bar: "2" });
console.log({ params4 });

// This example shows how to build a new URL with an object of search parameters from
// an existing URL that has search parameters.

const url1 = new URL("https://example.com/?a=hello&b=world");

// console.log(url1.href);
// https://example.com/?a=hello&b=world

// console.log(url1.origin);
// https://example.com

const add_params = {
  c: "a",
  d: new String(2),
  e: false.toString(),
};

const new_params = new URLSearchParams([
  ...Array.from(url1.searchParams.entries()), // [["a","hello"],["b","world"]]
  ...Object.entries(add_params), // [["c","a"],["d","2"],["e","false"]]
] as string[][]).toString();
// console.log(new_params);
// a=hello&b=world&c=a&d=2&e=false

const new_url = new URL(`${url1.origin}${url.pathname}?${new_params}`);

// console.log(new_url.href);
// https://example.com/?a=hello&b=world&c=a&d=2&e=false

// Here it is as a function that accepts (URL, Record<string, string>)
const addSearchParams = (url: string, params = {}) =>
  new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
      ...Array.from(url.searchParams.entries()),
      ...Object.entries(params),
    ] as string[][])}`
  );