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
        const imageFile = req.files['image'];

        if (!imageFile) {
            return res.status(400).json({ error: "No image file uploaded" });
        }

        const image = imageFile[0].filename;

        let newShop = new Shop({
            image: image,
            title: req.body.title,
            content: req.body.content,
            price: req.body.price,
        })
        await newShop.save()
        res.send(newShop)
    },


    edit: async (req, res) => {
        const { id } = req.params;
        const { title, content , price } = req.body;
        const imageFile = req.files['image']

        try {
            const shop = await Shop.findById(id)

            if(!shop) {
                return res.status(404).json({ error : "Shop not found"})
            }

            shop.title = title;
            shop.content = content;
            shop.price = price;

            //update the image if upload
            if(imageFile) {
                shop.image = imageFile[0].filename;
            }

            await shop.save()
            res.status(200).json({ message: "Shop Updated Succesfully!"});
        } catch(err) {
            console.error(err);
            res.status(500).json({ error: "Failed to update shop"});
        }

    },

    delete: async (req, res) => {
        const { id } = req.params
        await Shop.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    },
}
module.exports = { shopController }