import express from "express";
import { urlController } from "../controllers/urlController.js";

const urlRouter = express.Router();

urlRouter.route("/").post(urlController.shrink);
urlRouter.route("/:short").get(urlController.redirect);
urlRouter.route("/info/:short").get(urlController.analytics);

export { urlRouter };
