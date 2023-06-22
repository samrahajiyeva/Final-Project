const mongoose=require ('mongoose')
const { Shop }=require('../models/shop.model')
const {storage} =require("../middlewares/multer")

const shopController={
   getAll:(req,res)=>{
    Shop.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            res.status(500).json(err)
        }
    })
   
},
getById:(req,res)=>{
    let id =req.params.id
    Shop.findById(id,(err,doc)=>{
        if(!err){
            res.json(doc)
        }
    })
},
add: (req, res, next) => {

    let shop=new Shop({
        ...req.body,image:req.files[0].filename
    })
    shop.save((err,docs)=>{
        if(!err){
            res.send(`shop created ${docs}`)
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
    Shop.findByIdAndUpdate(
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
            res.send('Shop Edited')
        },
    )
},
delete:(req,res)=>{
    let id =req.params.id
    Shop.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.json('Shop delete')
        }
    })
},
}
module.exports={shopController}