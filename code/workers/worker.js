self.onmessage = async function (event) {
  let message = event.data;

  if (message.name == "say hello") {
    // do something
    message.output = "I finished work!";
    self.postMessage(message);
  }
};
