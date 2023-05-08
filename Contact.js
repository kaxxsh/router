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

Contact.get("/:id", (req, res) => {
  res.send(req.service.name);
});

Contact.param("id", (req, res, next, id) => {
  req.service = listenarr[id - 1];
  next();
});

export default Contact;
