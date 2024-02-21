//Ausnahme auslösen
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(10, 0)); // Ausnahme auslösen
} catch (error) {
  console.error(error.message); // Ausnahme behandeln
}

// custom errors

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }

  alertMessage() {
    console.log("The system failed, please try again");
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new CustomError("test");
  }
  return a / b;
}

try {
  console.log(divide(10, 0)); // Ausnahme auslösen
} catch (error) {
  if (error instanceof CustomError) {
    error.alertMessage();
  }
}
