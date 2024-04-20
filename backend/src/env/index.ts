import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  BACKEND_PORT: z.coerce.number().default(8081),
  JWT_SECRET: z.string().default("secret"),
  CONNECTION_DB: z.string().default(""),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Env erro na validação", _env.error);

  throw new Error("Variáveis de ambiente inválidas.");
}

export const env = _env.data;
