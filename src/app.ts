import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes";

export const createApp = (): Express => {
  const app: Express = express();

  app.use(cors());
  app.use(helmet());
  app.use(express.raw({ limit: "50mb" }));
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  app.use("/", router);

  return app;
};
