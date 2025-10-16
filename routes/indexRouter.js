import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Hey! Welcome to the index!"));

export { indexRouter };