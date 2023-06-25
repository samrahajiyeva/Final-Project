const mongoose = require('mongoose')
const { Blog } = require('../models/blog.model')
// const {storage} =require("../middlewares/multer")

const blogController = {
    getAll: async (req, res) => {
        const target = await Blog.find()
        res.send(target)
    },
    getById: async (req, res) => {
        const { id } = req.params
        const target = await Blog.findById(id)
        res.send(target)
    },

    add: async (req, res) => {
        const { filename } = req.body
        let newBlogs = new Blog({
            image: req.file.filename,
            title: req.body.title,
            date: req.body.date,
            content: req.body.content,
            poster: req.body.poster,
            comment: req.body.comment,
        })
        await newBlogs.save()
        res.send(newBlogs)
    },

    edit: async (req, res) => {
        const { id } = req.params
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body);
        res.send(`${id}'li element has been updated`)
    },

    delete: async(req, res) => {
        const { id } = req.params
        await Blog.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    },
}
module.exports = { blogController }