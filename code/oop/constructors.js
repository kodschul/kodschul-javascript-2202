function Person(name, age) {
  // API Anbindung etc

  // rechnen

  this.name = name;
  this.age = age;
}

function createPerson(name, age) {
  return { name, age };
}

const franz = new Person("Franz", 15);
const alice = new Person("Alice", 18);

const bob = createPerson("Bob", 12);

console.log({ franz: franz, alice, bob });
