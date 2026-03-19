const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true },
    gender:    { type: String, enum: ['Male', 'Female'] },
    email:     { type: String, required: true, unique: true }
})

module.exports = mongoose.model("User",UserSchema,"Users");
