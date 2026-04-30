const mongoose = require('mongoose')


const itemsSchema = new mongoose.Schema(
  {

     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },



    name: String,
    decription: String,
    sellingPrice: Number,
   purchasePrice: Number,
    quantity: Number,
    unit: String
  }
)

const Items = mongoose.model("Items", itemsSchema)
module.exports = Items