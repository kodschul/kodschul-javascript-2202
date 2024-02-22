const showClipboard = async () => {
  const text = await navigator.clipboard.readText();

  alert(text);
};

const setClipboard = async (value) => {
  await navigator.clipboard.writeText(value);
};
