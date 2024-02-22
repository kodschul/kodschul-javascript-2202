function sum(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function createUser(name) {
  return {
    id: name.replace(" ", "") + 1,
    name: name,
    firstName: name.split(" ")[0],
    lastName: name.split(" ")[1],
  };
}

module.exports = { sum, multiply, createUser };
