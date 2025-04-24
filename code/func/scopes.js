if (true) {
  var x = 1;
  console.log("Test x", x);

  x = 10;
}

const calculateSomething = () => {
  x += 1;
  console.log(x);
};

const calculateSomething2 = () => {
  x += 1;
  console.log(x);
};

calculateSomething();
calculateSomething2();
