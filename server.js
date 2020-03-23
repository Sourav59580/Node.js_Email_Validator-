const express = require('express');
const bodyParser = require("body-parser");
const validator = require('email-validator'); 

const app = express();



//esj set
app.set("view engine","ejs");

//middleware
app.use(bodyParser.urlencoded({ extended: false }))


//routes
app.get("/",(req,res)=>{
    res.render('index');
})
app.post("/check",(req,res)=>{
    var email = req.body.email;
    console.log(email);
    if(validator.validate(email))
    res.send("email is validate");
    else
    res.send('Invalid email');
})

const PORT = process.env.PORT || 3000;
//server connection
app.listen(PORT,(req,res)=>{
    console.log("server is running at port 3000");
})