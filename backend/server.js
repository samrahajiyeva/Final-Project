const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const listingRoute = require('./app/routes/listing.route')
const activityRoute = require('./app/routes/activity.route')
const blogRoute = require('./app/routes/blog.route')
const shopRoute = require('./app/routes/shop.route')
const userRoute = require('./app/routes/user.route')
app.use(cors())

//Db Connection
mongoose.connect("mongodb+srv://6zzkw91:iamcstudent@cluster0.qbxloy5.mongodb.net/").then(() => {
    console.log("db connected");
})

app.use('/listing',listingRoute)
app.use('/activity',activityRoute)
app.use('/blogs',blogRoute)
app.use('/shop',shopRoute)
app.use('/user',userRoute)

app.listen(8080, () => {
    console.log("server running")
})