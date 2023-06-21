const Listing = require("../models/Listing.Models")

const GetListing = async (req, res) => {
    Listing.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}

const GetListingById = async (req, res) => {
    const { id } = req.params
    Listing.findById(id, (err, doc) => {
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

const PostListing = async (req, res, next) => {
    try {
        const Listing = new Listing({
            img: req.body.img,
            title: req.body.title,
            tripType: req.body.tripType,
            place: req.body.place,
            activity: req.body.activity,
            content: req.body.content,
            price: req.body.price
        })
        Listing.save()
        res.status(200).json({ message: "Create" })
    } catch (error) {
        next(err);
    }
}

const DeleteListing = async (req, res) => {
    const { id } = req.params
    Listing.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Delete" })
        } else {
            res.status(404).json({ message: err })
        }
    })
}

const UpdateListing = async (req, res) => {
    const { id } = req.params
    Listing.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.status(200).json({ message: "Update" })
        } else {
            res.status(404).json({ message: err })
        }
    })

}

module.exports = {
    GetListing,
    GetListingById,
    PostListing,
    DeleteListing,
    UpdateListing
}

