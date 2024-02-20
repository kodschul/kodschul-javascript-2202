# String-Verarbeitung mit Regulären Ausdrücken in JavaScript

Reguläre Ausdrücke sind Muster, die zur Suche nach bestimmten Mustern in Zeichenketten verwendet werden. In JavaScript können sie für vielfältige Aufgaben der String-Verarbeitung eingesetzt werden. In dieser README.md-Datei werden einige Beispiele für die Verwendung von Regulären Ausdrücken zur String-Verarbeitung in JavaScript gezeigt.

## Suche nach Mustern

Reguläre Ausdrücke ermöglichen die Suche nach bestimmten Mustern in Zeichenketten.

### Beispiel:

```javascript
// Suche nach Mustern
const str = 'Hello, world!';
const pattern = /Hello/;
console.log(pattern.test(str)); // Output: true
```

## Ersetzen von Teilen eines Strings

Reguläre Ausdrücke können verwendet werden, um Teile eines Strings durch andere zu ersetzen.

```javascript
// Ersetzen von Teilen eines Strings
const str = 'Hello, world!';
const newStr = str.replace(/world/, 'universe');
console.log(newStr); // Output: Hello, universe!
```

## Extrahieren von Informationen

Mit Regulären Ausdrücken können Informationen aus Zeichenketten extrahiert werden.

```javascript
// Extrahieren von Informationen
const str = 'Name: John Doe, Age: 30';
const matches = str.match(/Name: (\w+ \w+), Age: (\d+)/);
console.log(matches[1]); // Output: John Doe
console.log(matches[2]); // Output: 30
```

## Validierung von Eingaben

Reguläre Ausdrücke können verwendet werden, um Eingaben zu validieren, z. B. das Format von E-Mail-Adressen.

```javascript
// Validierung von Eingaben
const email = 'example@email.com';
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
console.log(pattern.test(email)); // Output: true
```

## Aufteilen von Strings

Reguläre Ausdrücke können verwendet werden, um Zeichenketten in Teile aufzuteilen.

```javascript
// Aufteilen von Strings
const str = 'apple,banana,orange';
const parts = str.split(/,/);
console.log(parts); // Output: ['apple', 'banana', 'orange']
```