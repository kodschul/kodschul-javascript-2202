# Einführung in Unit-Testing mit JavaScript zur Sicherstellung der Codequalität

Unit-Tests sind ein wichtiger Bestandteil der Softwareentwicklung, um sicherzustellen, dass der Code korrekt funktioniert und Änderungen keine unerwünschten Seiteneffekte verursachen. JavaScript bietet verschiedene Tools und Frameworks, um Unit-Tests zu schreiben und die Codequalität zu gewährleisten. In dieser README.md-Datei werden einige grundlegende Konzepte und Beispiele für Unit-Tests in JavaScript erläutert.

## Warum Unit-Tests?

Unit-Tests überprüfen kleine, isolierte Einheiten des Codes, um sicherzustellen, dass sie wie erwartet funktionieren. Sie ermöglichen es Entwicklern, Vertrauen in den Code zu haben, Änderungen vorzunehmen und Refactorings durchzuführen, ohne die Funktionalität zu beeinträchtigen.

## Testframeworks in JavaScript

Es gibt verschiedene Testframeworks in JavaScript, die die Erstellung und Ausführung von Unit-Tests erleichtern. Einige der beliebtesten sind:

- **Jest**: Ein leistungsstarkes Testframework, das von Facebook entwickelt wurde und für seine Einfachheit und Flexibilität bekannt ist.
- **Mocha**: Ein flexibles Testframework, das mit verschiedenen Assertion-Bibliotheken verwendet werden kann.
- **Jasmine**: Ein BDD-Testframework, das einfach zu erlernen und zu verwenden ist.

## Beispiel für Unit-Tests mit Jest

Jest ist ein weit verbreitetes Testframework in der JavaScript-Community. Hier ist ein einfaches Beispiel, wie man damit Unit-Tests schreibt:

```javascript
// Beispiel für Unit-Tests mit Jest
function add(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(add(5, 7)).toBe(12);
});
```

## Beispiel für Unit-Tests mit Mocha und Chai
Mocha ist ein flexibles Testframework, das mit verschiedenen Assertion-Bibliotheken verwendet werden kann. Hier ist ein Beispiel für die Verwendung von Mocha mit der Chai-Assertion-Bibliothek:

```javascript
// Beispiel für Unit-Tests mit Mocha und Chai
const assert = require('chai').assert;

function multiply(a, b) {
  return a * b;
}

describe('Multiply', function() {
  it('should return 6 when multiplying 2 and 3', function() {
    assert.equal(multiply(2, 3), 6);
  });

  it('should return -15 when multiplying 3 and -5', function() {
    assert.equal(multiply(3, -5), -15);
  });
});
```