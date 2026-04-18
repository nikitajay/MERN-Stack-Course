const mongoose = require('mongoose')
const connectDB = () =>{
    try {

        mongoose.connect("mongodb://127.0.0.1:27017/item-database")
        .then(() => console.log("Mongo DB connected"))
        .catch((error) => console.log(error))
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = {connectDB}

