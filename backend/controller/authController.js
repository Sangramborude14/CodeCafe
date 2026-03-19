//external
const bycrypt = require('bycryptjs')

//local
const User = require("../models/auth");




//signup
exports.signupPost = (req,res,next) => {
    const{username,password,firstName,lastName,gender,email} = req.body;
    bycrypt.hash(password,12).then(hashedPassword => {
        const user_db = new Users({
            username,
            password: hashedPassword,
            firstName,
            lastName,
            gender,
            email,
        });
        return user_db.save();
    }).then(()=> {
        res.redirect("/home")
    })
}

//login
exports.loginGet = (req,res,next) => {

}
exports.loginPost = (req,res,next) => {

}
