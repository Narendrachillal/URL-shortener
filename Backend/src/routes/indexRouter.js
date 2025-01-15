import express from "express";
import { urlRouter } from "./urlRouter.js";

const indexRouter = express.Router();

indexRouter.use("/api/v1/url", urlRouter);

export { indexRouter };
