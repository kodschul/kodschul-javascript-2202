# Programmier-Paradigmen in JavaScript

In der Welt der Softwareentwicklung gibt es verschiedene Programmierparadigmen, die verschiedene Ansätze zur Lösung von Problemen bieten. JavaScript, eine der am häufigsten verwendeten Programmiersprachen, unterstützt mehrere dieser Paradigmen. In dieser README.md-Datei werden einige der wichtigsten Programmierparadigmen in JavaScript erläutert, einschließlich Beispielen für jede.

## Imperatives Programmieren

Das imperatives Programmieren beinhaltet die Beschreibung von Schritten, die ausgeführt werden sollen, um das gewünschte Ergebnis zu erzielen. Es ist auf direkte Befehle an den Computer ausgerichtet.

### Beispiel:

```javascript
// Imperatives Programmieren
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers)); // Output: 15
```

## Deklaratives Programmieren

Im Gegensatz zum imperativen Ansatz beschreibt das deklarative Programmieren, was erreicht werden soll, ohne explizit anzugeben, wie es erreicht werden soll.

### Beispiel:

```javascript
// Deklaratives Programmieren
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
```
