const mongoose=require ('mongoose')
const { Blog }=require('../models/blog.model')
// const {storage} =require("../middlewares/multer")

const blogController={
   getAll: async(req,res)=>{
    const blogs = await Blog.find()
    res.send(blogs)
},
getById:(req,res)=>{
    let id =req.params.id
    Blog.findById(id,(err,doc)=>{
        if(!err){
            res.json(doc)
        }
    })
},
add: async (req, res, next) => {

    let blogs= await new Blog({
        ...req.body
    })
    blogs.save()
},
edit:async(req,res)=>{
    let id =req.params.id
    Blog.findByIdAndUpdate(
        id,
        {
           ...req.body 
        },
        function (err,docs){
            if(err){
                console.log(err)
            } else{
                console.log(docs)
            }
            res.send('Blog Edited')
        },
    )
},
delete:(req,res)=>{
    let id =req.params.id
    Blog.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.json('Blog delete')
        }
    })
},
}
module.exports={blogController}