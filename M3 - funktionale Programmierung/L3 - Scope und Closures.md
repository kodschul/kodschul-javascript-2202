# Scope und Closures in JavaScript

In JavaScript spielen Scope und Closures eine wichtige Rolle bei der Bestimmung der Sichtbarkeit von Variablen und der Kontrolle über den Zugriff auf diese Variablen. In dieser README.md-Datei werden Scope und Closures in JavaScript erläutert, einschließlich Beispielen für jedes Konzept.

## Scope

Der Scope in JavaScript bestimmt den Gültigkeitsbereich von Variablen in einem bestimmten Abschnitt des Codes.

### Beispiel:

```javascript
// Scope
function myFunction() {
  let localVar = 'I am a local variable';
  console.log(localVar); // localVar is accessible here
}

myFunction();
console.log(localVar); // Error: localVar is not defined
```

## Closures

Closures ermöglichen es Funktionen in JavaScript, auf Variablen zuzugreifen, die außerhalb ihres eigenen Scope definiert sind.

```javascript
// Closures
function outerFunction() {
  let outerVar = 'I am from outerFunction';

  function innerFunction() {
    console.log(outerVar); // innerFunction has access to outerVar
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: I am from outerFunction
```

## Lexical Scope

JavaScript verwendet lexikalischen Scope, was bedeutet, dass der Scope einer Variablen durch ihre Position im Quellcode bestimmt wird.

```javascript
// Lexical Scope
function outerFunction() {
  let outerVar = 'I am from outerFunction';

  function innerFunction() {
    console.log(outerVar); // innerFunction has access to outerVar
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: I am from outerFunction
```

## Dynamischer Scope

Im Gegensatz zum lexikalischen Scope bestimmt das dynamische Scoping den Scope einer Variable basierend auf der Aufrufreihenfolge der Funktionen zur Laufzeit.

```javascript
// Dynamischer Scope (JavaScript verwendet lexikalischen Scope)
function outerFunction() {
  let outerVar = 'I am from outerFunction';

  function innerFunction() {
    console.log(outerVar); // innerFunction has access to outerVar
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: I am from outerFunction
```