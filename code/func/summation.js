const squared = (array) => array.map((x) => x * x);

const sumOfSquares_Imperative = (array) => {
  const squaredArray = squared(array);

  let sum = 0;

  for (const value of squaredArray) {
    sum += value;
  }

  return sum;
};

const sumOfSquares_Declarative = (array) => {
  return array.reduce((acc, value) => acc + value * value, 0);
};

const numbers = [1, 2, 3, 4, 5];

let output = numbers.reduce((previousOutput, currentValue, currentIndex) => {
  if (currentIndex % 2 != 0) {
    return previousOutput;
  }

  console.log({ previousOutput, currentValue });
  return previousOutput + currentValue;
}, 0);

console.log({ output });

// console.log(sumOfSquares_Imperative([2, 4]));
// console.log(sumOfSquares_Declarative([2, 4]));
