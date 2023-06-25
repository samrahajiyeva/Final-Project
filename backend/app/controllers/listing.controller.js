const mongoose = require('mongoose')
const { Listing } = require('../models/listing.model')


const listingController = {
    getAll: async (req, res) => {
        const target = await Listing.find()
        res.send(target)
    },
    getById: async(req, res) => {
        const { id } = req.params
        const target = await Listing.findById(id)
        res.send(target)
    },

    add: async (req, res) => {
        const {filename}= req.body
        let newListing = new Listing({
            image: req.file.filename,
            title: req.body.title,
            tripType: req.body.tripType,
            place: req.body.place,
            activity: req.body.activity,
            content: req.body.content,
            price: req.body.price
        })
        await newListing.save()
        res.send(newListing)
    },

    edit: async (req, res) => {
        const { id } = req.params
        const updateListing = await Listing.findByIdAndUpdate(id, req.body);
        res.send(`${id}'li element has been updated`)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await Listing.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    },
}
module.exports = { listingController }