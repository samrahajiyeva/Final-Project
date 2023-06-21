const mongoose = require("mongoose")
const {Schema} = mongoose

const ListingSchema = new Schema(
    {
        img:{required:true,type:String},
        title:{required:true,type:String},
        tripType:{required:true,type:String},
        place:{required:true,type:String},
        activity:{required:true,type:Number},
        content:{required:true,type:String},
        price:{required:true,type:Number},
    },
    {timestamps:true}
)

module.exports = mongoose.model("Listing",ListingSchema)