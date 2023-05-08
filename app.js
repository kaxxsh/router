import Express from "express";
import home from "./home.js";
import Menu from "./Menu.js";
import Contact from "./Contact.js";
const app = Express();

app.listen("5500");

app.use("/home", home);
app.use("/Menu", Menu);
app.use("/service", Contact);
