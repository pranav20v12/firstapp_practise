const express = require("express");
const app = express()
console.dir(app)
/*app.use((req,res)=>{
    console.log("we write the command")
    res.send("hello we recieve a request from ur side")
})*/
app.get('/',(req,res)=>{
    res.send("home page")
})
app.get('/cats/:subreddit',(req,res)=>{
    //console.log(req.params)
    const { subreddit }= req.params;
    res.send(`this is a ${subreddit} shop`)
    res.send("another page of cat")
})
app.get('/cats',(req,res)=>{
    console.log('cat club join')
    res.send("meow!!")
})
app.get('/search',(req,res)=>{
    //console.log(req.query);
    const { q } = req.query
    if(!q)
    {
        res.send("this is not a query")
    }
    res.send(`<hi>this is a: ${q} query</h>`)
})
app.get('*',(req,res)=>{
    res.send("wrong page open")
})
app.listen(3000,()=>{
    console.log("in listen command")
})