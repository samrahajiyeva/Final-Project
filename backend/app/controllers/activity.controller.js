const mongoose=require ('mongoose')
const { Activity }=require('../models/activity.model')
const {storage} =require("../middlewares/multer")

const activityController={
   getAll:(req,res)=>{
    Activity.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            res.status(500).json(err)
        }
    })
   
},
getById:(req,res)=>{
    let id =req.params.id
    Activity.findById(id,(err,doc)=>{
        if(!err){
            res.json(doc)
        }
    })
},
add: (req, res, next) => {

    let activity=new Activity({
        ...req.body,image:req.files[0].filename
    })
    activity.save((err,docs)=>{
        if(!err){
            res.send(`activity created ${docs}`)
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
    Activity.findByIdAndUpdate(
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
            res.send('Activity Edited')
        },
    )
},
delete:(req,res)=>{
    let id =req.params.id
    Activity.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.json('Activity delete')
        }
    })
},
}
module.exports={activityController}