//Backend Project
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


console.log(" Hello node.js project started")

const express = require('express')//node.js framework
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


app.use(express.json())
app.use(cors())



mongoose.connect("mongodb://127.0.0.1:27017/item-database").then(() => console.log("Mongo DB connected")).catch((error) => console.log(error))

const itemsSchema = new mongoose.Schema(
  {
    name: String,
    decription: String,
    SellingPrice: Number,
    purchaesprice: Number,
    quantity: Number,
    unit: String
  }
)

const Items = new mongoose.model("Items", itemsSchema) //table name/ collection name - items




//API 1  - create Item

app.post("/apI/create-item", async (req, res) => {
  try {
    const { name, decription, SellingPrice, purchaesprice, quantity, unit } = req.body

    const savaitem = new Items(
      {
        name,
        decription,
        SellingPrice,
        purchaesprice,
        quantity,
        unit
      }
    )

    await savaitem.save()

    res.status(201).json({ message: "item created", data: savaitem })
  } catch (error) {
    console.log(error)
  }

}
)


//API 1  - Update Item
app.put("/api/Update-item", async (req, res) => {
  try {

  } catch (error) {
    console.log
  }

})
//API 1  - Delete Item
app.delete("/api/Delete-item", async (req, res) => {
  try {

  } catch (error) {
    console.log
  }

})
//API 1  - get All Item
app.get("/api/get-all-item", async (req, res) => {
  try {

    const items = await Items.find()

    res.status(200).json({ message: "GET All Item List", data: items })

  } catch (error) {
    console.log
  }

})


//health ApI
app.get("/health", (req, res) => {
  res.status(200).json({ message: "server is running" })
})
const PORT = 9090

app.listen(PORT, () => {
  console.log('server started')
})
