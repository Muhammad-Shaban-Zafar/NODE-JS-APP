require('dotenv').config()
// console.log(process.env)

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.get("/twitter" , (req, res) => {
res.send("this is the twitter page")
});

app.get("/faceBook" , (req , res) => {
res.send("this is the face book page")
});

app.get("/htmlTages" , (req ,res) => {
res.send('<h1> This is a heading  </h1>')
});

app.get("/youtube" , (req , res) => {
res.send('<b>This is a youtube page</b>')
});

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});




