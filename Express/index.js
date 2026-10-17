const express = require('express');
const app = express();

const port = 3000;
app.listen(port,()=>{
    console.log(`The app is listening ${port}`)
})

app.use((req,res)=>{
    console.log('app is running')
})