const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.set("views",path.join(__dirname,"/views"));
app.set("viewengine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/rolldice",(req,res)=>{
    let rolldice = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{rolldice})
})
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    res.render("insta.ejs",{username});
})
app.listen(port,(req,res)=>{
    console.log(`app is lisenting ${port}`)
})
