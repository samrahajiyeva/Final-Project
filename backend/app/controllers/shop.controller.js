const mongoose=require ('mongoose')
const { Shop }=require('../models/shop.model')
// const {storage} =require("../middlewares/multer")

const shopController={
   getAll: async(req,res)=>{
    const shops = await Shop.find()
    res.send(shops)
   
},
getById:(req,res)=>{
    let id =req.params.id
    Shop.findById(id,(err,doc)=>{
        if(!err){
            res.json(doc)
        }
    })
},
add: async(req, res, next) => {

    let shops = await new Shop({
        ...req.body
    })
    shops.save()
},
edit:async(req,res)=>{
    let id =req.params.id
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