
const Items = require("./..//Models/ItemsModels")

const addItem = async (req, res) => {
    try {

        console.log(req.userId, "req===user")
        const { name, decription, sellingPrice, purchasePrice, quantity, unit } = req.body

        const savaitem = new Items(
            {
                name,
                decription,
                sellingPrice,
                purchasePrice,
                quantity,
                unit,
                userId: req.userId

            }
        )

        await savaitem.save()

        res.status(201).json({ message: "item created", data: savaitem })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating item", error: error.message })
    }

}

const getAllItems = async (req, res) => {
    try {

        const items = await Items.find({ userId: req.userId })

        res.status(200).json({ message: "GET All Item List", data: items })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error fetching items", error: error.message })
    }

}
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params

        const deleteItem = await Items.findByIdAndDelete(id)

        res.status(200).json({ message: "GET All Item List", deleteItem: deleteItem })


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error fetching items", error: error.message })
    }

}
const editItem = async (req, res) => {
    try {

        const{id, name, decription, sellingPrice, purchasePrice, quantity, unit} = req.body
        const updateItem = await Items.findByIdAndUpdate(id, {
            name,
            decription,
            sellingPrice,
            purchasePrice,
            quantity,
            unit
        }, { new: true })
        res.status(200).json({ message: "Item Updated", updateItem: updateItem })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error fetching items", error: error.message })
    }

}
module.exports = { addItem, getAllItems, deleteItem, editItem }