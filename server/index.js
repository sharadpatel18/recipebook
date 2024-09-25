const express = require('express')
const app = express();
const cors = require("cors");
const bodyPaser = require('body-parser');
const AuthRoutes = require('./Routes/AuthRoute')
const {Authentication} = require('./Middlewares/Auth')
require("dotenv").config()

app.use(cors())
app.use(bodyPaser.json());
app.use("/auth" , AuthRoutes)

// app.get("/hello" , Authentication , (req,res)=>{
//     res.send("hello world")
// })

app.listen(process.env.PORT , ()=>{
    console.log(`server is running on ${process.env.PORT} port`);
})