let person = {
  name: "Mike",
  age: 20,
};

// ---
function Animal(name) {
  this.name = name;
  this.sound = "silent";

  this.makeSound = function () {
    console.log(`${this.name} says ${this.sound}`);
  };
}

function Dog(name) {
  Animal.call(this, name);

  this.makeSound = function () {
    console.log(`${this.name} barks ${this.sound}`);
  };
}

const dog1 = new Dog("Puppy");
console.log(dog1);
dog1.makeSound();
// Animal.prototype.sayHello = function () {
//   console.log(`${this.name} says hello`);
// };

// const dog1 = new Animal("Puppy");
// dog1.sayHello();
// console.log(dog1);
// dog1.makeSound();

// -----
let animalPrototype = {
  sound: "undefined",
  makeSound: function () {
    console.log(this.sound);
  },
};

const dog = Object.create(animalPrototype);
console.log(dog.sound);
dog.sound = "woof!!";
dog.makeSound();

// console.log(dog.abc);
