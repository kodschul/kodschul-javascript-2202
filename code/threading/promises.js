async function expensiveCalculation() {
  await new Promise((r) => setTimeout(r, 1500));

  return 1000;
}

async function doWork() {
  let values = await Promise.all([
    expensiveCalculation(),
    expensiveCalculation(),
    expensiveCalculation(),
  ]);

  console.log({ values });
  console.log("Resume with code");
}

doWork();
