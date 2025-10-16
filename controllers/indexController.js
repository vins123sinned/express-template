import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

const getHomePage = (req, res) => {
  // just to showcase error functionality
  const indexPage = false;
  if (!indexPage) {
    throw new CustomNotFoundError("Index page not found");
  }

  res.send("Hey! This is the homepage!");
};

export { getHomePage };