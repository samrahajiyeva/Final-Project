const mongoose = require("mongoose")
const {Schema} = mongoose

const BlogSchema = new Schema(
    {
        img:{required:true,type:String},
        title:{required:true,type:String},
        date:{required:true,type:String},
        content:{required:true,type:String},
        poster:{required:true,type:String},
        comment:{required:true,type:Number}
    },
    {timestamps:true}
)

module.exports = mongoose.model("Blog",BlogSchema)