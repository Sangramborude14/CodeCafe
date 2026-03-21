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
    try {
        console.log("MyBlogGet invoked! Session data:", req.session);
        if(!req.session || !req.session.user) {
            console.log("No user session found in MyBlogGet!");
            return res.status(401).json({ message: "Not logged in" });
        }
        const username = req.session.user.username;
        console.log("Fetching blogs for username:", username);
        const blogs = await BlogNew.find({ username: username });
        console.log("Found blogs:", blogs.length);
        res.status(200).json(blogs);
    } catch (err) {
        console.error("Error fetching user's blogs:", err);
        res.status(500).json({ message: "failed to fetch blogs" });
    }
}

exports.MyBlogPost = async (req, res, next) => {

}


exports.editBlogPost = async (req,res,next) => {
    try{
        const blogId = req.params.id;
        const {Title, blogContent,ContentAuth} = req.body;
        
        const updatedBlog = await BlogNew.findByIdAndUpdate(
            blogId,
            {Title,blogContent,ContentAuth},
            {new: true}
        );
        res.status(200).json({message: "Blog updated",blog: updatedBlog});
    }catch(err){
        console.log('error updating blog',err);
        res.status(500).json({message: "failed to update blog"})
    }
}

exports.deleteBlog = async (req,res,next) => {
    const blogId = req.params.id;
    BlogNew.findByIdAndDelete(blogId)
    .then(() => {
        console.log(`blog deleted`);
        res.status(200).json({message: "Blog deleted successfully"});
    })
    .catch((err) => {
        console.log(`error deleting blog`, err);
        res.status(500).json({message: "Failed to delete blog"});
    });
}