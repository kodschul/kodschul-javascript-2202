# Speichern von Daten im Local Storage des Browsers

Der Local Storage ist ein Mechanismus in Webbrowsern, der es ermöglicht, Daten lokal auf dem Gerät des Benutzers zu speichern. Dies kann nützlich sein, um Daten zwischen verschiedenen Sitzungen zu persistieren oder temporäre Daten zu speichern.

## Speichern von Daten

Um Daten im Local Storage zu speichern, können Sie die `localStorage.setItem()`-Methode verwenden. Diese Methode akzeptiert einen Schlüssel-Wert-Paar und speichert den Wert im Local Storage.

### Beispiel:

```javascript
// Speichern von Daten im Local Storage
localStorage.setItem('username', 'John');
localStorage.setItem('email', 'john@example.com');
```

## Abrufen von Daten

Um gespeicherte Daten aus dem Local Storage abzurufen, verwenden Sie die localStorage.getItem()-Methode und geben den Schlüssel des gespeicherten Werts an.

```javascript
// Abrufen von Daten aus dem Local Storage
const username = localStorage.getItem('username');
console.log(username); // Output: John

const email = localStorage.getItem('email');
console.log(email); // Output: john@example.com
```

## Löschen von Daten

Um gespeicherte Daten aus dem Local Storage zu löschen, verwenden Sie die localStorage.removeItem()-Methode und geben den Schlüssel des zu löschenden Werts an.

```javascript
// Löschen von Daten aus dem Local Storage
localStorage.removeItem('username');
```

## Vollständiges Löschen aller Daten

Um alle gespeicherten Daten aus dem Local Storage zu löschen, verwenden Sie die localStorage.clear()-Methode.

```javascript
// Vollständiges Löschen aller Daten im Local Storage
localStorage.clear();
```