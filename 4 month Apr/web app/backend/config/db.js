const mongoose = require('mongoose')
const connectDB = () =>{
    try {

        mongoose.connect(process.env.mongo_URL)
        .then(() => console.log("Mongo DB connected"))
        .catch((error) => console.log(error))
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = {connectDB}

