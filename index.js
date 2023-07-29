const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./userRoutes");

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

app.use(router)


app.get("/",(req,res) => {
res.sendFile(path.join(__dirname + "/index.html"))
});

app.listen(port ,() =>{
    console.log(`Server is running on http://localhost:${port}`)
});