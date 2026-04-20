//users list table in database
const mongoose = require('mongoose')


const UsersSchema = new mongoose.Schema(
  {
    //user name
    name: String,

    city : String,

    mobileNO: Number,

    //user email
     email: String,

     //user Password
      Password: String,
  }
)

const Users = mongoose.model("Users", UsersSchema)
module.exports = Users