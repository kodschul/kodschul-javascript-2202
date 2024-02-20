# Einführung in die objektorientierte Programmierung

Die objektorientierte Programmierung (OOP) ist ein Paradigma, das auf der Verwendung von Objekten basiert, um Daten und Funktionen zu organisieren. In der OOP werden Daten in Form von Objekten dargestellt, die sowohl Eigenschaften (Attribute) als auch Methoden (Funktionen) enthalten können. JavaScript unterstützt OOP durch die Verwendung von Klassen und Objekten.

## Klassen und Objekte

In JavaScript werden Klassen verwendet, um Objekte zu definieren. Eine Klasse ist ein Bauplan für Objekte, die bestimmte Eigenschaften und Methoden haben können. Objekte sind Instanzen von Klassen.

### Beispiel:

```javascript
// Klasse und Objekte in JavaScript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} ${this.model} started.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  }
}

const myCar = new Car('Toyota', 'Camry', 2022);
myCar.start(); // Output: Toyota Camry started.
myCar.stop();  // Output: Toyota Camry stopped.
```

## Vererbung

Vererbung ist ein Konzept in der OOP, das es erlaubt, Eigenschaften und Methoden von einer Klasse zu einer anderen zu übertragen. JavaScript unterstützt die Vererbung durch das Konzept der Prototypen.

```javascript
// Vererbung in JavaScript
class Animal {
  speak() {
    console.log('Animal speaks.');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Dog barks.');
  }
}

const myDog = new Dog();
myDog.speak(); // Output: Animal speaks.
myDog.bark();  // Output: Dog barks.
```

## Polymorphismus

Polymorphismus ermöglicht es, dass Objekte unterschiedliche Formen haben können, selbst wenn sie von derselben Klasse erzeugt wurden. In JavaScript wird Polymorphismus oft durch das Überschreiben von Methoden erreicht.

```javascript
// Polymorphismus in JavaScript
class Animal {
  speak() {
    console.log('Animal speaks.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks.');
  }
}

const myDog = new Dog();
myDog.speak(); // Output: Dog barks.
```