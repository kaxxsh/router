import Express from "express";

const Menu = Express.Router();

Menu.get("/", (req, res) => {
  res.send("Menu");
});

export default Menu;
