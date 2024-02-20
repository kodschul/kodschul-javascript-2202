function createPerson(name, age, city) {
  return { name, age, city };
}

// Beispielaufruf
const person = createPerson("Max Mustermann", 30, "Berlin");
console.log(person);

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

function changeCarModel(newModel) {
  car.model = newModel;
  return; // Das Modell des Autos wurde auf ${newModel} geändert.;
}

// Beispielaufruf
console.log(car); // Vor der Änderung
console.log(changeCarModel("Camry")); // Änderung des Modells
console.log(car); // Nach der Änderung

const rectangle = {
  width: 5,
  height: 10,
  calculateArea: function () {
    return this.width * this.height;
  },
};

// Beispielaufruf
console.log(rectangle.calculateArea()); // Ausgabe: 50
