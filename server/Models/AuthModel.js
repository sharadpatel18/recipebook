const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://patelsharad595:CeAvsU3gsIS9Rr5P@recipedata.lqvij.mongodb.net/")
.then(()=>{
    console.log("database is connected successfully");
})
.catch((err)=>{
    console.log("error" , err);
})

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    isAdmin:{
        type:Boolean
    },
})

const User = mongoose.model("User" , userSchema);
module.exports = User;