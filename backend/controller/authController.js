//external
const bcrypt = require('bcryptjs')

//local
const User = require("../models/auth");

//signup
exports.signupPost = (req,res,next) => {
    const{username,password,firstName,lastName,gender,email} = req.body;
    bcrypt.hash(password,12).then(hashedPassword => {
        const user_db = new User({
            username,
            password: hashedPassword,
            firstName,
            lastName,
            gender,
            email,
        });
        return user_db.save();
    }).then(()=> {
        res.status(201).json({ message: "User signed up successfully!" });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "Signup failed" });
    })
}


//login
exports.loginGet = (req,res,next) => {

}
exports.loginPost = async (req,res,next) => {
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username: username});

        if(!user){
            return res.status(401).json({message: `wrong username`});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch){
            return res.status(401).json({message: `incorrect password`});
        }

        req.session.isLoggedIn = true;
        req.session.user = user;

        req.session.save((err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Session save failed" });
            }
            console.log(`logged in successfully as ${username}`);
            return res.status(200).json({ 
                message: "Logged in successfully", 
                user: { username: user.username, firstName: user.firstName, lastName: user.lastName } 
            });
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}


//logout
exports.Logout = (req,res,next) => {
    req.session.destroy((err) => {
       if(err){
         console.log(`error loging out`);
         return res.status(500).json({message: "logged out FAILED"})
       }
       res.clearCookie('connect.sid')//optional
        return res.status(200).json({message: "Logged Out"})
})
}

//isLoggedIn
exports.getStatus = (req,res,next) => {
    if(req.session.isLoggedIn) {
        return res.status(200).json({
            isLoggedIn: true,
            user: {username: req.session.user.username}
        })
    }
    return res.status(200).json({isLoggedIn: false})
}