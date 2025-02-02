import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/healthz", (req, res) => {
      res.set("Cache-Control", "s-maxage=600");
      return res.json({ ok: true });
    });

  return app;
};
