const Listing = require("../models/Listing.Models")

//get
const GetListing = async (req, res) => {
    const data = await Listing.find()
    res.send(data)
}


//get by id
const GetListingById = async (req, res) => {
    const { id } = req.params
    const target = await Listing.findById(id)
    res.send(target)
}



//post
const PostListing = async (req, res) => {
    const newListing = new Listing(
        {
            ...req.body
        }
    )
    await newListing.save()
    res.send(newListing)
}


//delete
const DeleteListing = async (req, res) => {
    const { id } = req.params
    await Listing.findByIdAndDelete(id)
    res.send(`${id}'li element silindi`)
}


const UpdateListing = async (req, res) => {
    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body);
    res.send(`${id}'li element guncellendi`)
}


module.exports = {
    GetListing,
    GetListingById,
    PostListing,
    DeleteListing,
    UpdateListing
}

