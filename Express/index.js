const express = require('express');
const app = express();

const port = 3000;
app.listen(port,()=>{
    console.log(`The app is listening ${port}`)
})

app.use((req,res)=>{
    code = "<h1>I am Vengeance</h1>";
    res.send(code);
    console.log('app is running')
})