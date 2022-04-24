const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book.routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json())
app.use(cors());
app.use("/books", router); // localhost:7000/books

mongoose
  .connect(
    "mongodb+srv://applearn:wawa80fc@cluster0.hdyxf.mongodb.net/rat?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(7000);
  })
  .catch((err) => console.log(err));