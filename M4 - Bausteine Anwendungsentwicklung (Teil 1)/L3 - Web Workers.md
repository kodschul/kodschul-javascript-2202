# Einführung in Web Workers: Multithreading für JavaScript

Web Workers sind eine leistungsstarke Funktion von JavaScript, die es ermöglicht, Multithreading in Webanwendungen einzuführen. Dies ermöglicht es, aufwändige Berechnungen im Hintergrund auszuführen, ohne die Benutzeroberfläche zu blockieren.

## Was sind Web Workers?

Ein Web Worker ist ein eigenständiger JavaScript-Thread, der im Hintergrund läuft und unabhängig vom Haupt-Thread der Anwendung arbeitet. Dadurch können aufwändige Berechnungen, Netzwerkanfragen oder andere langlaufende Aufgaben ausgeführt werden, ohne die Benutzeroberfläche zu beeinträchtigen.

## Arten von Web Workern

Es gibt zwei Arten von Web Workern: Dedicated Web Worker und Shared Web Worker.

- **Dedicated Web Worker**: Ein Dedicated Web Worker ist an eine einzige Instanz des aufrufenden Skripts gebunden. Er kommuniziert über eine PostMessage-Schnittstelle mit dem Haupt-Thread.

- **Shared Web Worker**: Ein Shared Web Worker kann von mehreren Instanzen des aufrufenden Skripts geteilt werden. Er bietet eine gemeinsame Umgebung für alle Instanzen, die ihn verwenden, und ermöglicht eine einfachere Kommunikation zwischen verschiedenen Teilen der Anwendung.

## Verwendung von Web Workern

Die Verwendung von Web Workern erfolgt in mehreren Schritten:

1. **Erstellen des Workers**: Zuerst muss ein Worker-Script erstellt werden, das die gewünschte Funktionalität enthält.

2. **Instanziieren des Workers**: Der Worker wird im Haupt-Thread mit dem `new Worker()`-Konstruktor instanziiert.

3. **Kommunikation**: Die Kommunikation zwischen dem Haupt-Thread und dem Worker erfolgt über die `postMessage()`- und `onmessage`-APIs.

4. **Verarbeitung im Worker**: Der Worker führt die empfangenen Nachrichten aus und sendet die Ergebnisse zurück an den Haupt-Thread.

## Beispiel:

### Haupt-Thread:

```javascript
// Haupt-Thread
const worker = new Worker('worker.js');

worker.postMessage({ type: 'start', data: [1, 2, 3, 4, 5] });

worker.onmessage = function(event) {
  console.log('Result:', event.data);
};
```

## Worker:

```javascript
// worker.js
onmessage = function(event) {
  const data = event.data;
  if (data.type === 'start') {
    const result = processData(data.data);
    postMessage(result);
  }
};

function processData(data) {
  // Perform complex calculations
  return data.reduce((acc, curr) => acc + curr, 0);
}
```