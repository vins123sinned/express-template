import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => res.send("home"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) throw error;

  console.log(`App running on port ${PORT}.`);
});