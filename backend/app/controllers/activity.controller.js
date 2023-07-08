const mongoose = require('mongoose')
const { Activity } = require('../models/activity.model')
// const {storage} =require("../middlewares/multer")

const activityController = {
    getAll: async (req, res) => {
        const target = await Activity.find()
        res.send(target)
    },
    getById: async (req, res) => {
        const { id } = req.params
        const target = await Activity.findById(id)
        res.send(target)
    },

    add: async (req, res) => {
        const imageFile = req.files['image'];

        if (!imageFile) {
            return res.status(400).json({ error: "No image file uploaded" });
        }

        const image = imageFile[0].filename;

        let newActivities = new Activity({
            title: req.body.title,
            day: req.body.day,
            content: req.body.content,
            image: image,
            season: req.body.season,
            location: req.body.location,
        })
        await newActivities.save()
        res.send(newActivities)
    },


    edit: async (req, res) => {
        const { id } = req.params;
        const { title  , day , content , season , location } = req.body;
        const imageFile = req.files['image']

        try {
            const activity = await Activity.findById(id)

            if(!activity) {
                return res.status(404).json({ error : "Activity not found"})
            }

            activity.title = title;
            activity.day = day;
            activity.content = content;
            activity.season = season;
            activity.location = location;

            //update the image if upload
            if(imageFile) {
                activity.image = imageFile[0].filename;
            }

            await activity.save()
            res.status(200).json({ message: "Activity Updated Succesfully!"});
        } catch(err) {
            console.error(err);
            res.status(500).json({ error: "Failed to update activity"});
        }
    },


    delete: async (req, res) => {
        const { id } = req.params
        await Activity.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    },
}
module.exports = { activityController }