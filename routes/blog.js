const blogController = require("../contollers/blog");
const express = require("express");
const router = express.Router();

router.get("/blogs", blogController.get_blogs);
router.post("/blogs", blogController.post_blog);
router.get("/blog/new", blogController.new_blog);
router.get("/blog/:id", blogController.get_blog_by_id);
router.delete("/blogs/:id", blogController.delete_blog);

module.exports = router;
