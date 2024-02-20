# Nutzung der File API und FileReader API in JavaScript

Die File API und die FileReader API sind Teil des Web-API-Standards und ermöglichen es JavaScript, mit Dateien auf dem lokalen Dateisystem des Benutzers zu interagieren. Dies ist besonders nützlich für Webanwendungen, die Dateioperationen wie das Lesen von Dateien oder das Hochladen von Dateien erfordern.

## Dateiauswahl durch den Benutzer

Mit der File API können Benutzer Dateien über das `<input type="file">`-Element auswählen und auf sie zugreifen.

### Beispiel:

```html
<!-- Dateiauswahl durch den Benutzer -->
<input type="file" id="fileInput" multiple>
```

## Lesen von Dateien mit der FileReader API

Die FileReader API ermöglicht das Lesen des Inhalts einer Datei als Daten-URL oder als Text.

```javascript
// Lesen von Dateien mit der FileReader API
document.getElementById('fileInput').addEventListener('change', function(event) {
  const fileList = event.target.files;
  const reader = new FileReader();

  reader.onload = function(event) {
    console.log(event.target.result); // Output: Inhalt der gelesenen Datei
  };

  reader.readAsText(fileList[0]); // Die erste ausgewählte Datei wird als Text gelesen
});
```

## Hochladen von Dateien

Mit der File API können Dateien auch hochgeladen werden, indem sie an Server gesendet werden.

```javascript
// Hochladen von Dateien
const fileInput = document.getElementById('fileInput');
const formData = new FormData();

fileInput.addEventListener('change', function(event) {
  const fileList = event.target.files;
  formData.append('file', fileList[0]); // Hinzufügen der ausgewählten Datei zum FormData-Objekt
});

// Verwendung von FormData für den Dateiupload mit Fetch API
fetch('https://example.com/upload', {
  method: 'POST',
  body: formData
})
.then(response => {
  console.log('Datei erfolgreich hochgeladen:', response);
})
.catch(error => {
  console.error('Fehler beim Hochladen der Datei:', error);
});
```