const mongoose = require('mongoose')
const { Listing } = require('../models/listing.model')


const listingController = {
    getAll: async (req, res) => {
        const target = await Listing.find()
        res.send(target)
    },
    getById: async (req, res) => {
        const { id } = req.params
        const target = await Listing.findById(id)
        res.send(target)
    },

    add: async (req, res) => {
        const imageFile = req.files['image'];

        if (!imageFile) {
            return res.status(400).json({ error: "No image file uploaded" });
        }

        const image = imageFile[0].filename;

        let newListing = new Listing({
            image: image,
            day: req.body.day,
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
        const { id } = req.params;
        const { day , title , tripType , place , activity , content , price } = req.body;
        const imageFile = req.files['image']

        try {
            const listing = await Listing.findById(id)

            if(!listing) {
                return res.status(404).json({ error : "Listing not found"})
            }

            listing.day = day;
            listing.title = title;
            listing.tripType = tripType;
            listing.place = place;
            listing.activity = activity;
            listing.content = content;
            listing.price = price;

            //update the image if upload
            if(imageFile) {
                listing.image = imageFile[0].filename;
            }

            await listing.save()
            res.status(200).json({ message: "Listing Updated Succesfully!"});
        } catch(err) {
            console.error(err);
            res.status(500).json({ error: "Failed to update listing"});
        }
    },


    delete: async (req, res) => {
        const { id } = req.params
        await Listing.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    },
}
module.exports = { listingController }