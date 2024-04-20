import { app } from "./app";
import { env } from "./env";

app
  .listen({
    port: env.BACKEND_PORT,
    host: "0.0.0.0",
  })
  .then((address) => {
    console.log(`🚀 Servidor ouvindo em ${address}`);
  });
