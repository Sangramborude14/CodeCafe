//external
const path = require("path");
const express = require("express");
const server = express();
const session = require('express-session');
const {default: mongoose, Collection}  = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);
const cors = require('cors');

//local
const rootDir = require("./utils/pathUtils.js");
const MONGO_URL = "mongodb://localhost:27017/todo";
const PORT = 8000;
const errorController = require('./controller/error.js');
const blogRouter = require("./routes/blogRouter");
const Users = require("./models/auth.js")
const Blogs = require("./models/blog.js")

//parsing
server.use(express.urlencoded({extended: true}));
server.use(express.json()); // Add JSON parser
server.use(cors()); // Enable CORS for all routes


//mongoDB session
const store = new MongoDBStore({
    uri: MONGO_URL,
    collection: 'session'
})

//session
server.use(session({
    secret: "thisisthehashing",
    resave: true,
    saveUninitialized: true,
    store
}));

//public middleware
server.use((req, res, next) => {
    req.isLoggedIn = req.session.isLoggedIn;
    next();
});     
server.use(express.static(path.join(rootDir, 'public')));
// server.use(user);
server.use("/api/blog",blogRouter); // Fixed: Added leading slash



//PORTing
mongoose.connect(MONGO_URL).then(() =>  {
        console.log(`connect to MOngoDB`);
        server.listen(PORT,() => {
            console.log(`backend connected and running at http://localhost:${PORT}`);
        })
}).catch(err => {
    console.log(`failed to connect backend`,err)
})
