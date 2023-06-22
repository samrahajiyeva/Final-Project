const mongoose=require ('mongoose')
const { Blog }=require('../models/blog.model')
const {storage} =require("../middlewares/multer")

const blogController={
   getAll:(req,res)=>{
    Blog.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            res.status(500).json(err)
        }
    })
   
},
getById:(req,res)=>{
    let id =req.params.id
    Blog.findById(id,(err,doc)=>{
        if(!err){
            res.json(doc)
        }
    })
},
add: (req, res, next) => {

    let blog=new Blog({
        ...req.body,image:req.files[0].filename
    })
    blog.save((err,docs)=>{
        if(!err){
            res.send(`blog created ${docs}`)
        }
    })
},
edit:async(req,res)=>{
    let id =req.params.id
    const files=req.files
    const imageArr=[]
    for (let i=0; i<files.length;i++){
        imageArr.push(files[i].filename)
    }
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