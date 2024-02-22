let fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function (event) {
  // Dateiobjekt auswählen
  let file = event.target.files[0];

  // FileReader-Objekt erstellen
  let reader = new FileReader();

  // Event-Listener für den Abschluss des Lesevorgangs hinzufügen
  reader.onload = function (event) {
    // Dateiinhalt als Text abrufen
    let fileContent = event.target.result;

    document.getElementById("content").innerHTML = fileContent;
    // Verarbeitung des Dateiinhalts
  };

  // Datei als Text lesen
  reader.readAsText(file);
});
