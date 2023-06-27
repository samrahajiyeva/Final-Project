const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const listingRoute = require('./app/routes/listing.route')
const activityRoute = require('./app/routes/activity.route')
const blogRoute = require('./app/routes/blog.route')
const shopRoute = require('./app/routes/shop.route')
const userRoute = require('./app/routes/AuthRoutes')
app.use('/api/users',require('./app/routes/AuthRoutes'))

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json({ limit: "20mb" }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


mongoose.set("strictQuery", true);

const path = require('path')
const uploadPath=path.join(__dirname,'public')
app.use('/public',express.static(uploadPath))

app.use(cors())
app.use(express.json())

//Db Connection
mongoose.connect("mongodb+srv://6zzkw91:iamcstudent@cluster0.qbxloy5.mongodb.net/").then(() => {
    console.log("db connected");
})

app.use('/listing',listingRoute)
app.use('/activity',activityRoute)
app.use('/blogs',blogRoute)
app.use('/shop',shopRoute)
app.use('/auth',userRoute)

app.listen(8080, () => {
    console.log("server running")
})