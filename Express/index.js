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
app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    let inhtml = `hello ${username} your id ${id}`;
    res.send(inhtml);
})
app.get("/search",(req,res)=>{
    let {q,gender} = req.query;
    console.log(req.query)
    if(!q) {
        res.send(`<h1>nothing searched</h1>`)
    }
    res.send(`<h1>you searched for ${q} and gender ${gender}</h1>`);
})

app.post("/business",(req,res)=>{
    res.send("This is called business")
})
app.use((req, res) => {
    res.status(404).send("This is wrong path");
});
