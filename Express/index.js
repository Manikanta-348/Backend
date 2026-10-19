const express = require('express');
const app = express();

const port = 3000;
app.listen(port,()=>{
    console.log(`The app is listening ${port}`)
})

// app.use((req,res)=>{
//     code = "<h1>I am Vengeance</h1>";
//     res.send(code);
//     console.log('app is running')
// })
app.get("/",(req,res)=>{
    res.send("this is root path");
})
app.get("/apple",(req,res)=>{
    res.send("this is apple path");
})

app.post("/business",(req,res)=>{
    res.send("This is called business")
})
app.use((req, res) => {
    res.status(404).send("This is wrong path");
});