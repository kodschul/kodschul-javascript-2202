# Klassische Vererbung in JavaScript

In der klassischen Vererbung erbt eine Klasse Eigenschaften und Methoden von einer anderen Klasse. JavaScript unterstützt zwar keine klassische Vererbung wie einige andere objektorientierte Sprachen, aber es gibt Möglichkeiten, ähnliches Verhalten zu erreichen.

## Verwendung von Prototypen

JavaScript verwendet Prototypen, um Vererbung zu implementieren. Jedes Objekt in JavaScript hat einen internen Verweis auf einen anderen Objekt, genannt seinen Prototypen.

### Beispiel:

```javascript
// Verwendung von Prototypen
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log(`My name is ${this.name}.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('Woof woof!');
};

const myDog = new Dog('Buddy', 'Labrador');
myDog.sayName(); // Output: My name is Buddy.
myDog.bark();    // Output: Woof woof!
```