const mongoose = require('mongoose')
const { User } = require('../models/user.model')
// const { storage } = require("../middlewares/multer")

const userController = {
    getAll: async(req, res) => {
        const users = await User.find()
        res.send(users)

    },
    getById: (req, res) => {
        let id = req.params.id
        User.findById(id, (err, doc) => {
            if (!err) {
                res.json(doc)
            }
        })
    },
    add: async(req, res, next) => {

        let user = new User({
            ...req.body
        })
        user.save()
    },
    edit: async (req, res) => {
        let id = req.params.id
        User.findByIdAndUpdate(
            id,
            {
                ...req.body
            },
            function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(docs)
                }
                res.send('User Edited')
            },
        )
    },
    delete: (req, res) => {
        let id = req.params.id
        User.findByIdAndDelete(id, (err, doc) => {
            if (!err) {
                res.json('User delete')
            }
        })
    },
}
module.exports = { userController }