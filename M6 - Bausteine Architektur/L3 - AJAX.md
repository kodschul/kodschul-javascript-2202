# Kommunikation mit dem Server mittels AJAX

Die Kommunikation mit dem Server mittels AJAX (Asynchronous JavaScript and XML) ermöglicht es, Daten zwischen dem Browser und dem Server auszutauschen, ohne die gesamte Seite neu laden zu müssen. Dies bietet eine schnellere und flüssigere Benutzererfahrung.

## XMLHttpRequest (XHR)

XHR ist eine API in JavaScript, die verwendet wird, um HTTP-Anfragen asynchron auszuführen. Sie bildet die Grundlage für AJAX.

### Beispiel:

```javascript
// XMLHttpRequest (XHR)
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error('An error occurred');
    }
  }
};
xhr.send();
```

## Fetch API

Die Fetch API ist eine modernere Alternative zu XHR, die eine verbesserte Syntax und Funktionalität bietet.

```javascript
// Fetch API
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('An error occurred');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## jQuery AJAX

jQuery bietet auch eine vereinfachte Methode zum Ausführen von AJAX-Anfragen.

```javascript
// jQuery AJAX
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: function(data) {
    console.log(data);
  },
  error: function() {
    console.error('An error occurred');
  }
});
```