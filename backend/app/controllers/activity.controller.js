const mongoose=require ('mongoose')
const { Activity }=require('../models/activity.model')
// const {storage} =require("../middlewares/multer")

const activityController={
   getAll: async (req,res)=>{
   const activities = await Activity.find()
   res.send(activities)
},
getById:(req,res)=>{
    let id =req.params.id
    Activity.findById(id,(err,doc)=>{
        if(!err){
            res.json(doc)
        }
    })
},
add:async (req, res, next) => {
    let activities=await new Activity({
        ...req.body
    })
    activities.save()
},
edit:async(req,res)=>{
    let id =req.params.id
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
delete: async(req,res)=>{
    let id =req.params.id
    Activity.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.json('Activity delete')
        }
    })
},
}
module.exports={activityController}