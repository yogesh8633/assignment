// blog.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for blog
let registrationModel = new Schema({
  factomaniaId:{
    type:String
  },
  firstname: {
    type:String
  },
  lastname: {
    type:String
  },
  dob:{
    type:String
  },
  gender:{
      type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  mobile:{
    tyepe:String
  },
  fav:{
    type:String
  }
},{
    collection: 'REGISTRATION'
});

module.exports = mongoose.model('REGISTRATION', registrationModel);