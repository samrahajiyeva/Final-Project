const User = require("../models/User.Models")

//get
const GetUser = async (req, res) => {
    const data = await User.find()
    res.send(data)
}

//get by id
const GetUserById = async (req, res) => {
    const { id } = req.params
    const target = await User.findById(id)
    res.send(target)
}


//post
const PostUser = async (req, res) => {
    const newUser = new User(
        {
            ...req.body
        }
    )
    await newUser.save()
    res.send(newUser)
}


//delete
const DeleteUser = async (req, res) => {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    res.send(`${id}'li element silindi`)
}


const UpdateUser = async (req, res) => {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(id, req.body);
    res.send(`${id}'li element guncellendi`)
}

module.exports = {
    GetUser,
    GetUserById,
    // PostUser,
    DeleteUser,
    UpdateUser
}

