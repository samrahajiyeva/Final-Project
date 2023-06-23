const mongoose=require ('mongoose')
const multer = require('multer')
const { Listing }=require('../models/listing.model')
const {storage} =require("../middlewares/multer")

const listingController={
   getAll:async (req,res)=>{
    const lists = await Listing.find()
    res.send(lists)
},
getById:(req,res)=>{
    let id =req.params.id
    Listing.findById(id,(err,doc)=>{
        if(!err){
            res.json(doc)
        }
    })
},
add: async(req, res, next) => {
    let list= await new Listing({
        ...req.body
    })
    list.save()
},
edit:async(req,res)=>{
    let id =req.params.id
    Listing.findByIdAndUpdate(
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
            res.send('Listing Edited')
        },
    )
},
delete:async(req,res)=>{
    let id =req.params.id
    Listing.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.json('Listing delete')
        }
    })
},
}
module.exports={listingController}