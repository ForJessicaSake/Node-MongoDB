require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const Document = require("./models/blogs");
const app = express();

app.set("view engine", "ejs");

const dbURI = process.env.dbURI;
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => app.listen(3000, () => console.log("listening on port 3000")))
    .catch((err) => console.log(err));


app.use(express.urlencoded({ extended: true }));

app.post("/blogs", (req, res) => {
  const blog = new Document(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  Document.find()
    .then((result) => {
      res.render("index", { result });
    })
    .catch((err) => console.log(err));
});

app.get("/blog/new", (req, res) => {
  res.render("new");
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  Document.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((err) => console.log(err));
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Document.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(err));
});

app.use((req, res) => {
  res.status(404).render("404");
});
