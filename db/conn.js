const mongoose=require("mongoose");


mongoose
  .connect("mongodb://127.0.0.1:27017/student-api")
  .then(() => console.log("connecting done..."))
  .catch((err) => console.log("no connecting"));
