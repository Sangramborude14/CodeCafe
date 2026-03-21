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
    if (req.session.user && req.session.user.username) {
        res.status(200).json({ username: req.session.user.username, message: "Ready to create blog" });
    } else {
        res.status(401).json({ message: "Unauthorized: User not logged in" });
    }
}

exports.AllBlogsGet = async (req, res, next) => {
    try {
        const blogs = await BlogNew.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({
            message: "failed to fetch blogs"
        })
    }
}

exports.editBlogGet = async (req, res, next) => {
    try {
        const blog = await BlogNew.find();
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({
            message: "failed to fetch blogs"
        })
    }
}

exports.MyBlogGet = async (req, res, next) => {

}

exports.MyBlogPost = async (req, res, next) => {

}
