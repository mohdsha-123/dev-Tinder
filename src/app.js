const express = require("express");
const app = express();

app.get('/user', (req, res, next) => {
    console.log("Handling route 1!")
    next();
}, (req,res,next) => {
  console.log("Handling route 2!");
  next();
},(req,res,next) => {
  console.log("Handling route 3!");
  next();
},
(req,res,next) => {
  console.log("Handling route 4!");
  next();
}, (req,res,next) => {
  console.log("Handling route 5!");
  res.send("Hello, World!");
})

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
