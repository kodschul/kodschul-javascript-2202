# Verwendung von Konstruktor-Funktionen in JavaScript

Konstruktor-Funktionen sind eine Möglichkeit, Objekte in JavaScript zu erstellen. Sie werden häufig verwendet, um mehrere Instanzen eines Objekttyps zu erstellen, indem sie als Bauplan dienen.

## Erstellung einer Konstruktor-Funktion

Eine Konstruktor-Funktion wird mit dem Schlüsselwort `function` definiert und verwendet das Schlüsselwort `this`, um Eigenschaften an die Instanz des Objekts zu binden.

### Beispiel:

```javascript
// Erstellung einer Konstruktor-Funktion
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Erstellen von Instanzen der Person-Klasse
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1); // Output: Person { name: 'Alice', age: 30 }
console.log(person2); // Output: Person { name: 'Bob', age: 25 }
```

## Verwendung von Prototypen

Prototypen ermöglichen es, Methoden einer Konstruktor-Funktion hinzuzufügen, die von allen Instanzen dieser Funktion geteilt werden.

```javascript
// Verwendung von Prototypen
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

const person2 = new Person('Bob', 25);
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
```

## Verwendung des new-Operators

Der new-Operator wird verwendet, um eine Instanz einer Konstruktor-Funktion zu erstellen. Er erstellt ein neues Objekt, bindet this an dieses Objekt und fügt Eigenschaften und Methoden hinzu.

```javascript
// Verwendung des `new`-Operators
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person('Alice', 30);
console.log(person); // Output: Person { name: 'Alice', age: 30 }
```