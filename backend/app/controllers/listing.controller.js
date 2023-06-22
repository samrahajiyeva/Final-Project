const mongoose=require ('mongoose')
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
add: async (req, res, next) => {
    let list=await new Listing({
        ...req.body,image:req.files[0].filename
    })
    list.save()
},
edit:async(req,res)=>{
    let id =req.params.id
    const files=req.files
    const imageArr=[]
    for (let i=0; i<files.length;i++){
        imageArr.push(files[i].filename)
    }
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
delete:(req,res)=>{
    let id =req.params.id
    Listing.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.json('Listing delete')
        }
    })
},
}
module.exports={listingController}