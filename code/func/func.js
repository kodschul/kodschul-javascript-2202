function doOperation(operation, x, y) {
  const result = operation(x, y);
  return `The result of ${x} ${operation.name} ${y} is ${result}`;
}

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

const result = doOperation(add, 1, 2);
console.log(`add, x + y = z: ${result}`);

const result2 = doOperation(sub, 1, 2);
console.log(`sub, x - y = z: ${result2}`);

const result3 = doOperation(mul, 1, 2);
console.log(`mul, x * y = z: ${result3}`);

// ---

class Operation {
  constructor(operation) {
    this.operation = operation;
  }

  execute(x, y) {
    const result = this.operation(x, y);
    return `The result of ${x} ${this.operation.name} ${y} is ${result}`;
  }
}

const addOp = new Operation(add);
const subOp = new Operation(sub);
const mulOp = new Operation(mul);
const divOp = new Operation(div);

console.log(`add, x + y = z: ${addOp.execute(1, 2)}`);
console.log(`sub, x - y = z: ${subOp.execute(1, 2)}`);
console.log(`mul, x * y = z: ${mulOp.execute(1, 2)}`);
