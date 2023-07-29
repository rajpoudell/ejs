const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())


app.get("/",(req,res) => {
res.sendFile(path.join(__dirname + "/index.html"))
});


app.post("/api/v1/register",(req,res) => {

    const userName = req.body.name;
    const userEmail =  req.body.email;
    const userPassword =  req.body.password;

    res.json({
        success:true, //send data to user
    })  
})


app.listen(port ,() =>{
    console.log(`Server is running on http://localhost:${port}`)
});