//external
const express = require("express");
const blogRouter = express.Router();

//local
const blogController = require("../controller/blogController");

blogRouter.get("/blogs", blogController.createBlogGet);
blogRouter.post("/blogs", blogController.createBlogPost);

blogRouter.get("/AllBlogs",blogController.AllBlogsGet);
;
module.exports = blogRouter;