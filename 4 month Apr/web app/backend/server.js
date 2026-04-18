
require('dotenv').config()
// or import 'dotenv/config' // for esm//Backend Project
console.log(process.env.PORT,"===>")
//Node.js
//Express.js
//DB - mango Db


//API List

// 1. API Create Item - get Data values from front end (Items details and store into DB


//2. API Update Item  - get Item Details from Front end which item we need to update

// 3. API Delete Item - get Item Details From Frot end an delete this record from database

// 4. API get All Records get All recoreds from Dil and show to UI Front end

// const getData = () => {

//}
//function getData(){

//}


const express = require('express')//node.js framework
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const { connectDB } = require('./config/db')

const{addItem,editItem,deleteItem ,getAllItems} = require('./controllers/itemControllers')
app.use(express.json())
app.use(cors())



connectDB()



//API 1  - create Item

app.post("/apI/create-item",addItem
)


//API 1  - Update Item
app.put("/api/Update-item", editItem)
//API 1  - Delete Item
app.delete("/api/delete-item/:id",deleteItem  )
//API 1  - get All Item
app.get("/api/get-all-item",getAllItems  )


//health ApI
app.get("/health", (req, res) => {
  res.status(200).json({ message: "server is running" })
})
const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
