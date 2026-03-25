
const Items = require("./..//Models/ItemsModels")

const addItem = async (req,res) => {
    try {
        const { name, decription, sellingPrice, purchasePrice, quantity, unit } = req.body

        const savaitem = new Items(
            {
                name,
                decription,
                sellingPrice,
                purchasePrice,
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

const getAllItems = async (req,res) => {
    try {

        const items = await Items.find()

        res.status(200).json({ message: "GET All Item List", data: items })

    } catch (error) {
        console.log
    }

}
const deleteItem = async (req,res) => {
    try {
        const { id } = req.params

        const deleteItem = await Items.findByIdAndDelete(id)

        res.status(200).json({ message: "GET All Item List", deleteItem: deleteItem })


    } catch (error) {
        console.log(error)
    }

}
const editItem = async (req,res) => {
    try {

    } catch (error) {
        console.log
    }

}
module.exports= { addItem, getAllItems, deleteItem, editItem }