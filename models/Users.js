const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username:'string', 
  email:'string',
  password:'string',
  creationDate:{
    type: Date, default: Date.now
  }
})

module.exports = mongoose.model('Users', UserSchema)