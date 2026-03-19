//external
const express = require("express");
const blogRouter = express.Router();

//local
const blogController = require("../controller/blogController");

blogRouter.post("/blogs",blogController.createBlog);
;
module.exports = blogRouter;