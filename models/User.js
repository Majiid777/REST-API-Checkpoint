const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const {Schema} = mongoose;

const userSchema = new Schema({
        fullName: String,
        email: String,
        phone: String,
    });
module.exports = mongoose.model("User", userSchema);