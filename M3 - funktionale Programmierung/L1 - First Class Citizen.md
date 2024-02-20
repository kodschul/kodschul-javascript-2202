# First-Class-Citizen in JavaScript

In der Programmierung bezeichnet "First-Class-Citizen" (auch "Erstklassenobjekt" genannt) eine Entität, die wie jeder andere Wert behandelt werden kann. In JavaScript können Funktionen als First-Class-Citizen betrachtet werden, da sie wie Daten behandelt werden können.

## Funktionen als First-Class-Citizen

In JavaScript können Funktionen wie jede andere Variable behandelt werden. Sie können an Variablen zugewiesen, als Parameter an andere Funktionen übergeben, von Funktionen zurückgegeben und in Datenstrukturen wie Arrays oder Objekten gespeichert werden.

### Beispiel:

```javascript
// Funktionen als First-Class-Citizen
function greet() {
  return 'Hello, world!';
}

const myFunction = greet;
console.log(myFunction()); // Output: Hello, world!
```

## Funktionen als Parameter

In JavaScript können Funktionen als Parameter an andere Funktionen übergeben werden. Dies ermöglicht die Implementierung von Funktionen höherer Ordnung.

```javascript
// Funktionen als Parameter
function greet(name) {
  return `Hello, ${name}!`;
}

function greetUser(greeterFunction, userName) {
  return greeterFunction(userName);
}

console.log(greetUser(greet, 'Alice')); // Output: Hello, Alice!
```

## Funktionen als Rückgabewert

Funktionen können in JavaScript auch als Rückgabewerte anderer Funktionen dienen.

```javascript
// Funktionen als Rückgabewert
function createGreeter() {
  return function(name) {
    return `Hello, ${name}!`;
  };
}

const greeter = createGreeter();
console.log(greeter('Bob')); // Output: Hello, Bob!
```

## Funktionen in Datenstrukturen

Funktionen können in JavaScript in Datenstrukturen wie Arrays oder Objekten gespeichert werden.

```javascript
// Funktionen in Datenstrukturen
const functionArray = [
  function() { return 'Function 1'; },
  function() { return 'Function 2'; }
];

console.log(functionArray[0]()); // Output: Function 1
```