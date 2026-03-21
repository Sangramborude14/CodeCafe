//external
const path = require("path");
const express = require("express");
const server = express();
const session = require('express-session');
const { default: mongoose, Collection } = require('mongoose');
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
const authRouter = require("./routes/authRouter");

//parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json()); // Add JSON parser
server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})); // Enable CORS with credentials for Vite dev server


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
const isAuth = (req,res,next) => {
    if(!req.session.isLoggedIn){
        return res.status(401).json({error: "please login"})
    }
    next();
}

server.use(express.static(path.join(rootDir, 'public')));
// server.use(user);
server.use("/api/blog",isAuth,blogRouter);
server.use("/api/auth", authRouter);



//PORTing
mongoose.connect(MONGO_URL).then(() => {
    console.log(`connect to MOngoDB`);
    server.listen(PORT, () => {
        console.log(`backend connected and running at http://localhost:${PORT}`);
    })
}).catch(err => {
    console.log(`failed to connect backend`, err)
})
