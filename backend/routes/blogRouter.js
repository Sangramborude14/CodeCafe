//external
const express = require("express");
const blogRouter = express.Router();

//local
const blogController = require("../controller/blogController");


blogRouter.get("/blogs", blogController.createBlogGet);
blogRouter.post("/blogs", blogController.createBlogPost);

blogRouter.get("/AllBlogs",blogController.AllBlogsGet);

blogRouter.get('/editBlogs',blogController.editBlogGet);

blogRouter.get('/MyBlog',blogController.MyBlogGet);
blogRouter.post("/MyBlog",blogController.MyBlogPost);    

module.exports = blogRouter;