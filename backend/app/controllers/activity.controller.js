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
        const {filename}= req.body
        let newActivities = new Activity({
            title: req.body.title,
            content: req.body.content,
            image: req.file.filename,
            season: req.body.season,
            location: req.body.location,
        })
        await newActivities.save()
        res.send(newActivities)
    },

    edit: async (req, res) => {
        const { id } = req.params
        const updateActivity = await Activity.findByIdAndUpdate(id, req.body);
        res.send(`${id}'li element has been updated`)
    },

    delete: async (req, res) => {
        const { id } = req.params
        await Activity.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    },
}
module.exports = { activityController }