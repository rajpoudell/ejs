const express  = require('express');
const path = require("path")
const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
    console.log(path.join(__dirname + "/index.html"));
});


app.post("/nice/get",(req,res) => {
    res.send("<h1>hello server</h1>");
    console.log("name");
});


app.listen(port ,() =>{
    console.log(`Server is Working on port: ${port}`);
})