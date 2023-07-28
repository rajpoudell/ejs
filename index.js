const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended:false}));


app.get("/api/v1/userdata",(req,res) => {
    res.json({
        name:"raj",
        email:"sample@gmail.com",
        password:"hexed",
    });
});

app.post("/api/v1/register",(req,res) =>{


    res.json({
        success:true
    })
})


app.listen(port ,() =>{
    console.log(`Server is running on http://localhost:${port}`)
});