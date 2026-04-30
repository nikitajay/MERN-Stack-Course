const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    name: String,
    city: String,
    mobileNO: Number,
    email: String,
    Password: String,
  }
)

// 🔥 IMPORTANT FIX
const User = mongoose.models.User || mongoose.model("User", UserSchema)

module.exports = User