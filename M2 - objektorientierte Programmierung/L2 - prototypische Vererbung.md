# Prototypische Vererbung in JavaScript

Die prototypische Vererbung ist ein Konzept in JavaScript, das auf Prototypen basiert. Objekte können Eigenschaften und Methoden von anderen Objekten erben, indem sie auf deren Prototypen verweisen.

## Beispiel:

```javascript
// Prototypische Vererbung
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  console.log("Some generic sound");
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Labrador");
myDog.makeSound(); // Output: Woof!
```