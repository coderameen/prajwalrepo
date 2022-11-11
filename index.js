const express =require('express');
const app = express()
const path = require('path')
const port =3000
app.get('/', (req,res)=>{
    res.send("hello world")
})
app.get('/about', (req,res)=>{
    //res.send("about")
    res.sendFile(path.join(__dirname,'index.html'))
})
app.listen(port, ()=>{
    console.log("this is running in port $(port)")
})