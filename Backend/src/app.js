import { corsOptions } from "./config/cors.js";
import { indexRouter } from "./routes/indexRouter.js";
import cors from "cors";
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("*", cors(corsOptions));

app.use("/", indexRouter);

export default app;
