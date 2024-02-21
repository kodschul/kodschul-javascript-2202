function createOperation(x) {
  // logic

  return (y) => {
    return x + y;
  };
}

const value = createOperation(10)(2);

console.log({ value });

// --

function add(x, y) {
  return x + y;
}

function operate4(base, x, y, z, a) {
  return base(x, y) + base(z, a);
}

console.log(operate4(add, 1, 2, 3, 4));
