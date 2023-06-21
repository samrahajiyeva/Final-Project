const mongoose = require("mongoose")
const {Schema} = mongoose

const ActivitySchema = new Schema(
    {
        title:{required:true,type:String},
        content:{required:true,type:String},
        img:{required:true,type:String},
        season:{required:true,type:String},
        content:{required:true,type:String},
        location:{required:true,type:String},
    },
    {timestamps:true}
)

module.exports = mongoose.model("Activity",ActivitySchema)