import Express from "express";
import home from "./home.js";
import Menu from "./Menu.js";
import Contact from "./Contact.js";
import path from "path";
const app = Express();

app.set("view engine", "ejs");
app.use(Express.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  response.send("Get  Router on Home Page");
});

app.use("/home", home);
app.use("/Menu", Menu);
app.use("/service", Contact);
app.listen("5500");
