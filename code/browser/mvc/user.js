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
