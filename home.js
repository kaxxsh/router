import Express from "express";

const home = Express.Router();

home.get("/", (req, res) => {
    res.send("Home")
})

export default home;
