self.onmessage = async function (event) {
  let message = event.data;

  if (message.name == "say hello") {
    // do something
    await doWork();
    message.output = "I finished work!";
    self.postMessage(message);
  }
};

async function doWork() {
  await new Promise((r) => setTimeout(r, 2000));

  return true;
}
