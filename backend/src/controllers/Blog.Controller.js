const Blog = require("../models/Blog.Models")


//get
const GetBlog = async (req, res) => {
    const data = await Blog.find()
    res.send(data)
}

//get by id
const GetBlogById = async (req, res) => {
    const { id } = req.params
    const target = await Blog.findById(id)
    res.send(target)
}

//post
const PostBlog = async (req, res) => {
    const newBlog = new Blog({...req.body})
    await newBlog.save()
    res.send(newBlog)
}


//delete
const DeleteBlog = async (req, res) => {
    const { id } = req.params
    await Blog.findByIdAndDelete(id)
    res.send(`${id}'li element silindi`)
}


const UpdateBlog = async (req, res) => {
    const { id } = req.params;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body);
    res.send(`${id}'li element guncellendi`)
}


module.exports = {
    GetBlog,
    GetBlogById,
    PostBlog,
    DeleteBlog,
    UpdateBlog
}

