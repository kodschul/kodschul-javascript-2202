function sum(a, b, c) {
  return a + b + c;
}

sum.prototype.test = () => {
  return 0;
};

console.log(sum.prototype.test());
