const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://mohdshariq8589:Nhu1eM9y7FaJJ2dq@dev-tinder.x9b1k.mongodb.net/?retryWrites=true&w=majority&appName=Dev-Tinder"
  );
};

module.exports = connectDB;