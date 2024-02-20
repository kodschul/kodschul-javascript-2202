# Die Modell-View-Controller-Architektur in JavaScript

Die Modell-View-Controller (MVC)-Architektur ist ein Designmuster, das in der Softwareentwicklung verwendet wird, um die Trennung von Daten (Modell), Benutzeroberfläche (View) und Anwendungslogik (Controller) zu fördern. Dies fördert eine saubere Strukturierung von Code und erleichtert die Wartung und Skalierbarkeit von Anwendungen.

## Modell

Das Modell repräsentiert die Daten der Anwendung und enthält die Logik für die Datenmanipulation. Es ist für die Speicherung, Validierung und Verwaltung der Daten verantwortlich.

### Beispiel:

```javascript
// Modell
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  save() {
    // Logik zum Speichern des Benutzers in der Datenbank
    console.log(`User ${this.name} saved.`);
  }
}

const user1 = new User('Alice', 'alice@example.com');
user1.save(); // Output: User Alice saved.
```

## View

Die View ist für die Darstellung der Benutzeroberfläche verantwortlich. Sie zeigt dem Benutzer die Daten an und reagiert auf Benutzerinteraktionen.

```javascript
// View
function renderUser(user) {
  const userInfo = document.createElement('div');
  userInfo.innerHTML = `<p>Name: ${user.name}</p><p>Email: ${user.email}</p>`;
  document.body.appendChild(userInfo);
}

const user2 = new User('Bob', 'bob@example.com');
renderUser(user2);
```

## Controller

Der Controller handhabt Benutzerinteraktionen und aktualisiert das Modell entsprechend. Er dient als Vermittler zwischen Modell und View.

```javascript
// Controller
class UserController {
  constructor() {
    this.user = null;
  }

  createUser(name, email) {
    this.user = new User(name, email);
    this.user.save();
    this.renderUser();
  }

  renderUser() {
    renderUser(this.user);
  }
}

const userController = new UserController();
userController.createUser('Charlie', 'charlie@example.com');
```