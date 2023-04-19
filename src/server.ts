import { env } from "@/config/env";
import cors from "cors";
import express, { json } from "express";
import { router } from "@/routes";

const server = express();

server.use(json());
server.use(cors());

server.use("/api", router);

server.listen(env.SERVER_PORT, async () => {
  console.log(`Server is running at port ${env.SERVER_PORT}`);
});
