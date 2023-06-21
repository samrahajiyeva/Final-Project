const Activity = require("../models/Activity.Models")

const GetActivity = async (req, res) => {
    Activity.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}

const GetActivityById = async (req, res) => {
    const { id } = req.params
    Activity.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.status(200)
                res.send(doc)
            } else {
                res.status(404).json({ message: "Not Found!!!" })
            }
        } else {
            res.status(500).json({ message: err })
        }
    })
}

const PostActivity = async (req, res, next) => {
    try {
        const Activity = new Activity({
            title: req.body.title,
            content: req.body.content,
            img: req.body.img,
            season: req.body.season,
            content: req.body.content,
            location: req.body.location
        })
        Activity.save()
        res.status(200).json({ message: "Create" })
    } catch (error) {
        next(err);
    }
}

const DeleteActivity = async (req, res) => {
    const { id } = req.params
    Activity.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Delete" })
        } else {
            res.status(404).json({ message: err })
        }
    })
}

const UpdateActivity = async (req, res) => {
    const { id } = req.params
    Activity.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.status(200).json({ message: "Update" })
        } else {
            res.status(404).json({ message: err })
        }
    })

}

module.exports = {
    GetActivity,
    GetActivityById,
    PostActivity,
    DeleteActivity,
    UpdateActivity
}

