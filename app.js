import express from "express";
import { indexRouter } from "./routes/indexRouter.js";
import "dotenv/config";

const app = express();

app.use("/", indexRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) throw error;

  console.log(`App running on port ${PORT}.`);
});