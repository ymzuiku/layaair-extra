const memoize = function(func, hasher?) {
  const fn = function(key) {
    const cache = fn.cache;
    const address = hasher ? hasher.apply(this, arguments) : key;
    if (cache.address === undefined)
      cache[address] = func.apply(this, arguments);
    return cache[key];
  } as any;
  fn.cache = {};
  return fn;
};

export default memoize;
