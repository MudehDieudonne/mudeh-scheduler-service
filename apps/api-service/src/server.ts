import Fastify from "fastify";
import cors from "@fastify/cors";

const buildServer = () => {
  const app = Fastify({ logger: true });

  app.register(cors);

  app.get("/", async () => {
    return { message: "Scheduler API is running " };
  });

  return app;
};

const start = async () => {
  const app = buildServer();
  try {
    await app.listen({ port: 3001, host: "0.0.0.0" });
    console.log("Server running on http://localhost:3001");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
