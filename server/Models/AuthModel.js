const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/recipebook")
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