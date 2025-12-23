self.onmessage = (event) => {
  const data = event.data;

  setTimeout(() => {
    postMessage(data ** 2);
  }, 1000);

  setTimeout(() => {
    postMessage(data ** 3);
  }, 2000);

  setTimeout(() => {
    postMessage(data ** 4);
  }, 3000);
};
