const express = require("express");
const connectDB = require("./config/database.js");
const User = require("./models/user.js");
const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Almaas",
    lastName: "Ansari",
    emailId: "almaasansari@gmail.com",
    password: "almaasansari@",
  });

  try {
    await user.save();
    res.send("User added Successfully");
  } catch (error) {
    res.status(400).send("Error saving the user: ", error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log(`server is running on port 3000`);
    });
  })
  .catch((err) => {
    console.log("Not Connected");
  });
