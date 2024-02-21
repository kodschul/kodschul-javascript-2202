function createCounter(initialValue = 0) {
  let count = initialValue;

  return function () {
    count++;
    return count;
  };
}

const c = createCounter(2);

console.log(c());

console.log(c());
