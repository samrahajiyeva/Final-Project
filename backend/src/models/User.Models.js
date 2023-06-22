const mongoose = require("mongoose")
const {Schema} = mongoose
const jwt=require("jsonwebtoken")

const UserSchema = new Schema(
    {
        username:{required:true,type:String},
        email:{required:true,type:String},
        password:{required:true,type:String},
    },
    {timestamps:true}
)

UserSchema.methods.generateJwtFromUser = function(){
    const {JWT_SECRET_KEY,JWT_EXPIRE} = process.env
    const payload = {
        id:this._id,
        name:this.name,
        email:this.email,
        password:this.password
    }

    const token = jwt.sign(payload,JWT_SECRET_KEY,{
        expiresIn:JWT_EXPIRE
    });
    return token
}


module.exports = mongoose.model("User",UserSchema)
