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
        const imageFile = req.files['image'];

        if (!imageFile) {
            return res.status(400).json({ error: "No image file uploaded" });
        }

        const image = imageFile[0].filename;

        let newBlogs = new Blog({
            image: image,
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
        const { id } = req.params;
        const { title , date , content , poster , comment } = req.body;
        const imageFile = req.files['image']

        try {
            const blog = await Blog.findById(id)

            if(!blog) {
                return res.status(404).json({ error : "Blog not found"})
            }

            blog.title = title;
            blog.date = date;
            blog.content = content;
            blog.poster = poster;
            blog.comment = comment;

            //update the image if upload
            if(imageFile) {
                blog.image = imageFile[0].filename;
            }

            await blog.save()
            res.status(200).json({ message: "Blog Updated Succesfully!"});
        } catch(err) {
            console.error(err);
            res.status(500).json({ error: "Failed to update blog"});
        }

    },

    delete: async (req, res) => {
        const { id } = req.params
        await Blog.findByIdAndDelete(id)
        res.send(`${id}'s element has been deleted`)
    },
}
module.exports = { blogController }