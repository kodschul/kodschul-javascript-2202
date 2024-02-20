# Eigenschaften des Funktionsobjekts in JavaScript

In JavaScript sind Funktionen Objekte mit einer Vielzahl von Eigenschaften. Diese Eigenschaften ermöglichen es, Funktionen auf verschiedene Weise zu manipulieren und zu verwenden. Im Folgenden werden einige der wichtigsten Eigenschaften des Funktionsobjekts erläutert.

## name

Die `name`-Eigenschaft enthält den Namen der Funktion als Zeichenkette.

### Beispiel:

```javascript
function greet() {
  console.log("Hello!");
}

console.log(greet.name); // Output: greet
```

## length

Die length-Eigenschaft gibt die Anzahl der benannten Parameter der Funktion zurück.

```javascript
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum.length); // Output: 3
```

## prototype

Die prototype-Eigenschaft ermöglicht es, Methoden und Eigenschaften zu einer Funktion hinzuzufügen, die dann von allen Instanzen dieser Funktion geerbt werden.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice");
person1.greet(); // Output: Hello, my name is Alice
```

## constructor

Die constructor-Eigenschaft verweist auf die Funktion, mit der ein Objekt erstellt wurde.

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

const car = new Car("Toyota", "Camry");
console.log(car.constructor === Car); // Output: true
```

## Eine Eigenschaft zuweisen

Funktionen in JavaScript sind auch Objekte, was bedeutet, dass Sie ihnen wie anderen Objekten Eigenschaften zuweisen können.

```javascript
function greet() {
  console.log("Hello!");
}

greet.customProperty = "Some value";
console.log(greet.customProperty); // Output: Some value
```