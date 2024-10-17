const express = require('express')
const app = express();
const cors = require("cors");
const bodyPaser = require('body-parser');
const AuthRoutes = require('./Routes/AuthRoute')
const RecipeRoutes = require('./Routes/RecipeRoute')
require("dotenv").config()

app.use(cors())
app.use(bodyPaser.json());
app.use("/auth" , AuthRoutes)
app.use("/recipe" , RecipeRoutes)

// app.get("/hello" , Authentication , (req,res)=>{
//     res.send("hello world")
// })

app.listen(process.env.PORT , ()=>{
    console.log(`server is running on ${process.env.PORT} port`);
})