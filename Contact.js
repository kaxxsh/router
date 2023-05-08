import Express from "express";

const Contact = Express.Router();

const listenarr = [
  {
    id: 1,
    name: "kamesh",
  },
  {
    id: 2,
    name: "sanjay",
  },
  {
    id: 3,
    name: "shanu",
  },
];

Contact.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = listenarr.find((items) => items.id == id);
  console.log(req.params.id);
  if (data) {
    res.send(data.name);
  }
});

export default Contact;
