import Express from "express";

const Contact = Express.Router();

const listenarr = [
  {
    name: "kamesh",
  },
  {
    name: "sanjay",
  },
  {
    name: "shanu",
  },
];

Contact.get("/new", (req, res) => {
  res.render("new");
});

Contact.post("/", (req, res) => {
  listofusers.push({ name: request.body.firstname });
  response.redirect(`/users/${listofusers.length}`);
});

Contact.get("/:id", (req, res) => {
  response.send(`${request.user.name} with id ${request.params.id}`);
});

Contact.param("id", (req, res, next, id) => {
  req.service = listenarr[id - 1];
  next();
});

export default Contact;
