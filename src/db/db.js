const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kodr")
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });




  // creating scheam


  const useerSchema = new mongoose.Schema({
    username:String,
    age:Number
  })

  const user = mongoose.model('user',useerSchema)

  

  