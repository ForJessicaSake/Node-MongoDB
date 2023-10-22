const Document = require("../models/blogs");

const get_blogs = (req, res) => {
  Document.find()
    .then((result) => {
      res.render("blog/index", { result });
    })
    .catch((err) => console.log(err));
};

const post_blog = (req, res) => {
  const blog = new Document(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};

const new_blog = (req, res) => {
  res.render("blog/new");
};

const get_blog_by_id = (req, res) => {
  const id = req.params.id;
  Document.findById(id)
    .then((result) => {
      res.render("blog/details", { blog: result });
    })
    .catch((err) => console.log(err));
};
const delete_blog = (req, res) => {
  const id = req.params.id;
  Document.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(err));
};

module.exports = {
  get_blogs,
  post_blog,
  new_blog,
  get_blog_by_id,
  delete_blog,
};
