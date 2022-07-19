const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://chat-app:nodejs@cluster0.h84v5i5.mongodb.net/?retryWrites=true&w=majority", ()=> {
  console.log('connected to mongodb')
})
