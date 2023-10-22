const express = require("express");
const mongoose = require("mongoose");
const blogRoute = require("./routes/blog");
require("dotenv").config();
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
app.use(blogRoute);

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about/about");
});

app.use((req, res) => {
  res.status(404).render("404/404");
});
