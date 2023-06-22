const Activity = require("../models/Activity.Models")


//get
const GetActivity = async (req, res) => {
    const data = await Activity.find()
    res.send(data)
}

//get byy id
const GetActivityById = async (req, res) => {
    const { id } = req.params
    const target = await Activity.findById(id)
    res.send(target)
}


//post
const PostActivity = async (req, res) => {
    const newActivity = new Activity(
        {
            ...req.body
        }
    )
    await newActivity.save()
    res.send(newActivity)
}

//delete
const DeleteActivity = async (req, res) => {
    const { id } = req.params
    await Activity.findByIdAndDelete(id)
    res.send(`${id}'li element silindi`)
}

const UpdateActivity = async (req, res) => {
    const { id } = req.params;
    const UpdateActivity = await Blog.findByIdAndUpdate(id, req.body);
    res.send(`${id}'li element guncellendi`)
}


module.exports = {
    GetActivity,
    GetActivityById,
    PostActivity,
    DeleteActivity,
    UpdateActivity
}

