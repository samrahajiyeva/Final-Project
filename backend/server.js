const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const listingRoute = require('./app/routes/listing.route')
app.use(cors())

//Db Connection
mongoose.connect("mongodb+srv://6zzkw91:iamcstudent@cluster0.qbxloy5.mongodb.net/").then(() => {
    console.log("db connected");
})

app.use('/listings',listingRoute)

app.listen(8080, () => {
    console.log("server running")
})