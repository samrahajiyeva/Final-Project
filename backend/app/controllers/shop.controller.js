const mongoose = require('mongoose')
const { Shop } = require('../models/shop.model')
// const {storage} =require("../middlewares/multer")

const shopController = {
    getAll: async (req, res) => {
        const target = await Shop.find()
        res.send(target)

    },
    getById: async (req, res) => {
        const { id } = req.params
        const target = await Shop.findById(id)
        res.send(target)
    },

    add: async (req, res) => {
        const { filename } = req.body
        let newShop = new Shop({
            image: req.file.filename,
            title: req.body.title,
            content: req.body.content,
            price: req.body.price,
        })
        await newShop.save()
        res.send(newShop)
    },

    edit: async (req, res) => {
        const { id } = req.params
        const updateShop = await shopController.findByIdAndUpdate(id, req.body);
        res.send(`${id}'li element has been updated`, updateShop)
    },
    delete: async(req, res) => {
        const { id } = req.params
        await Shop.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    },
}
module.exports = { shopController }