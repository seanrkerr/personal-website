if (typeof window === `undefined`) {
  const { server } = require(`./server`);
  console.log(`server???`, server);
  server.listen();
} else {
  const { worker } = require(`./browser`);
  worker.start();
  console.log(`worker???`, worker);
}
