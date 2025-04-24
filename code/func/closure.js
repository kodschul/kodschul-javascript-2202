let count = 0;

const counterA = () => {
  count++;
  return count;
};

const counterB = () => {
  count++;
  return count;
};

function createCounter(step = 1) {
  // erstell eine lokale variable
  let localCount = 0;
  return function (customStep = step) {
    // increment function
    localCount += customStep;
    return localCount;
  };
}

const createCounter2 = () => {
  let localCount;
  return () => {
    localCount++;
    return localCount;
  };
};

const counter1 = createCounter(2);
const counter2 = createCounter(5);

console.log("counter1", counter1(10));
console.log("counter1", counter1());
console.log("counter2", counter2());
console.log("counter2", counter2());

// console.log(counterA());
// console.log(counterB());
// console.log(counterB());
