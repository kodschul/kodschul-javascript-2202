console.log("Hello World!");

let worker = new Worker("./worker.js");

worker.onmessage = function (event) {
  console.log(`Worker said: ${JSON.stringify(event.data)}`);
};

worker.onerror = function () {
  console.log("Worker had an error");
};

document.getElementById("rootButton").onclick = () => {
  worker.postMessage({
    name: "say hello",
  });
};
