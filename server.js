//this the importation of express package for our nodejs and express application
const express = require("express");
//this is the importation of body-parser package 
const bodyParser = require("body-parser")

//i am creating the instance of the express class or initialization of express app
const app = express();


//the use of the middlewares for the application
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get("/", (req, res) => {
  res.send("Welcome to upload image api !");
});


//the app is listening here
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
