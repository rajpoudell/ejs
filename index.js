const express  = require('express');

const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    
    res.send("<h1>Hello Home page</h1>")
});
app.get("/about",(req,res)=>{
    
    res.send("<h1>Hello about page</h1>")
});


app.listen(port ,() =>{
    console.log(`Server is Working on port: ${port}`);
})