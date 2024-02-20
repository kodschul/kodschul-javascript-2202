# Logging-Techniken mit JavaScript zur Verbesserung der Entwicklungsqualität

Das Implementieren von Logging-Techniken ist entscheidend, um die Qualität und Wartbarkeit von JavaScript-Anwendungen zu verbessern. Diese README.md-Datei enthält eine Übersicht über einige gängige Logging-Techniken mit JavaScript sowie Beispiele zu deren Verwendung.

## console.log()

Die `console.log()`-Methode ist die einfachste und am häufigsten verwendete Methode zum Protokollieren von Informationen in der Konsole des Browsers oder der Entwicklertools.

### Beispiel:

```javascript
console.log("Hello, world!");
```

## Logging-Level
Logging-Level ermöglichen es, die Dringlichkeit von Lognachrichten zu definieren. Es gibt verschiedene Level wie debug, info, warn und error, die je nach Bedeutung und Schweregrad der Nachricht verwendet werden können.

```javascript
console.debug("Debug message");
console.info("Info message");
console.warn("Warning message");
console.error("Error message");
```

## Benutzerdefinierte Logger
Die Erstellung benutzerdefinierter Logger ermöglicht eine bessere Kontrolle über das Logging-Verhalten und die Formatierung der Nachrichten.

```javascript
class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }

  error(message) {
    console.error(`[${this.name}] ERROR: ${message}`);
  }
}

const logger = new Logger("MyLogger");
logger.log("This is a log message");
logger.error("This is an error message");
```

## Lognachrichten formatieren
Das Formatieren von Lognachrichten kann dabei helfen, wichtige Informationen wie Zeitstempel, Dateiinformationen oder Kontext zu erfassen.

```javascript
function logWithTimestamp(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

logWithTimestamp("This message has a timestamp");
```

## Lognachrichten filtern
Das Filtern von Lognachrichten kann nützlich sein, um nur relevante Nachrichten anzuzeigen, insbesondere in großen Anwendungen.

```javascript
const DEBUG_MODE = true;

function debugLog(message) {
  if (DEBUG_MODE) {
    console.debug(message);
  }
}

debugLog("This message will only be logged in debug mode");
```