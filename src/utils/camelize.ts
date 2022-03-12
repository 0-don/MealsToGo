export default function camilaze(obj: any) {
  if (typeof obj === "string") return camelCase(obj);
  return walk(obj);
}

function walk(obj: { [x: string]: any }) {
  if (!obj || typeof obj !== "object") return obj;
  if (isDate(obj) || isRegex(obj)) return obj;
  if (isArray(obj)) return map(obj, walk);
  return reduce(
    objectKeys(obj),
    function (acc: { [x: string]: any }, key: string) {
      const camel = camelCase(key);
      acc[camel] = walk(obj[key]);
      return acc;
    },
    {}
  );
}

function camelCase(str: string) {
  return str.replace(/[_.-](\w|$)/g, function (_: any, x: string) {
    return x.toUpperCase();
  });
}

const isArray =
  Array.isArray ||
  function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

const isDate = function (obj: any) {
  return Object.prototype.toString.call(obj) === "[object Date]";
};

const isRegex = function (obj: any) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};

const has = Object.prototype.hasOwnProperty;
const objectKeys =
  Object.keys ||
  function (obj) {
    const keys = [];
    for (const key in obj) {
      if (has.call(obj, key)) keys.push(key);
    }
    return keys;
  };

function map(
  xs: any[],
  f: { (obj: any): any; (arg0: any, arg1: number): any }
) {
  if (xs.map) return xs.map(f);
  const res = [];
  for (let i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

function reduce(
  xs: any[],
  f: { (acc: any, key: any): any; (arg0: any, arg1: any, arg2: number): any },
  acc: {}
) {
  if (xs.reduce) return xs.reduce(f, acc);
  for (let i = 0; i < xs.length; i++) {
    acc = f(acc, xs[i], i);
  }
  return acc;
}
