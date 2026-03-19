const BlogNew = require('../models/blog');

//createBlog
exports.createBlogPost = async (req, res, next) => {
    try {
        const { username, Title, blogContent, ContentAuth } = req.body;
        const blog = new BlogNew({ username, Title, blogContent, ContentAuth });
        await blog.save();
        console.log(`blog created: ${Title}`);
        res.status(201).json({ message: "blog created" });
    } catch (err) {
        console.error("Error creating blog:", err);
        res.status(500).json({ message: "Error creating blog" });
    }
}

exports.createBlogGet = (req, res, next) => {
    res.status(200).json({ message: "Ready to create blog" });
}

exports.AllBlogsGet = async (req,res,next) => {
    try {
        const blogs = await BlogNew.find();
        res.status(200).json(blogs);
    }catch(err){
        res.status(500).json({
            message: "failed to fetch blogs"
        })
    }
}