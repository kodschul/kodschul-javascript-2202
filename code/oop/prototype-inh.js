// Verwendung von Prototypen
function Animal(name) {
  this.name = name;

  this.sayName = function () {
    console.log(`My name is ${this.name}.`);
  };
}

function Dog(name, breed) {
  this.breed = breed;
  this.name = name;

  Animal.call(this, name);
}

function Fish(name, swimSpeed = 1) {
  this.swimSpeed = swimSpeed;
  Animal.call(this, name);
}

const dog = new Dog("Buddy", "Labrador");
const fish = new Fish("Nemo", 2);

dog.sayName();
fish.sayName();
