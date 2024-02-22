console.log("Hello World!");

let worker1 = new Worker("./worker.js");
let worker2 = new Worker("./worker.js");

worker1.onmessage = onWorkerMessage;
worker2.onmessage = onWorkerMessage;

let characters = [];

function onWorkerMessage(event) {
  characters.push(event.data);
}

document.getElementById("rootButton").onclick = () => {
  worker1.postMessage({
    characterId: 1,
  });
  worker2.postMessage({
    characterId: 2,
  });
};
