import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";

export const app = fastify();

app.get("/", async () => {
  return { ok: "API rodando" };
});

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    reply
      .status(400)
      .send({ message: "Validation error", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
  }

  reply.status(500).send({ message: "Internal server error" });
});
