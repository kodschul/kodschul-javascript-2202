console.log("Hello World!");

let worker = new Worker("./worker.js");

worker.onmessage = function (event) {
  console.log(`Worker said: ${JSON.stringify(event.data)}`);
};

document.getElementById("rootButton").onclick = () => {
  worker.postMessage({
    name: "say hello",
  });
};
