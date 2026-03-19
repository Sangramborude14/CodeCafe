const BlogNew = require('../models/blog');
exports.createBlog = async (req,res,next) => {
    const {username,blogContent,ContentType} = req.body;
    const blog = new BlogNew({username,blogContent,ContentType})   
    await blog.save().then(() => {
        console.log(`blog created`);
    });
    res.status(201).json({message: "blog created"});
}