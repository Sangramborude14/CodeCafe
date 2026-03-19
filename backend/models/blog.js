const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
username: {
    type: String,
    required: true
},
Title: {
    type: String,
    required: true
},
blogContent: {
    type: String,
    required: true
},
ContentAuth: {
    type: Boolean,
    required: true
}
});

module.exports = mongoose.model("Blog",blogSchema,"Blogs")
