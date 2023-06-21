const Blog = require("../models/Blog.Models")

const GetBlog = async (req, res) => {
    Blog.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}

const GetBlogById = async (req, res) => {
    const { id } = req.params
    Blog.findById(id, (err, doc) => {
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

const PostBlog = async (req, res, next) => {
    try {
        const Blog = new Blog({
            img: req.body.img,
            title: req.body.title,
            date: req.body.date,
            content: req.body.content,
            poster: req.body.poster,
            comment: req.body.comment
        })
        Blog.save()
        res.status(200).json({ message: "Create" })
    } catch (error) {
        next(err);
    }
}

const DeleteBlog = async (req, res) => {
    const { id } = req.params
    Listing.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.status(200).json({ message: "Delete" })
        } else {
            res.status(404).json({ message: err })
        }
    })
}

const UpdateBlog = async (req, res) => {
    const { id } = req.params
    Blog.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.status(200).json({ message: "Update" })
        } else {
            res.status(404).json({ message: err })
        }
    })

}

module.exports = {
    GetBlog,
    GetBlogById,
    PostBlog,
    DeleteBlog,
    UpdateBlog
}

