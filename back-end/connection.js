const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://intern-chatapp:nodejs@cluster0.scequsk.mongodb.net/?retryWrites=true&w=majority", ()=> {
  console.log('connected to mongodb')
})
