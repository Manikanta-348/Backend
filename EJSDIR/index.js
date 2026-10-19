const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.set("views",path.join(__dirname,"/views"));
app.set("viewengine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.listen(port,(req,res)=>{
    console.log(`app is lisenting ${port}`)
})
