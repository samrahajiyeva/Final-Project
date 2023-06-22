const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
//routers
const ListingRouter = require("./src/routers/ListingRouter")
const ActivityRouter = require("./src/routers/ActivityRouter")
const BlogRouter = require("./src/routers/BlogRouter")
const UserRouter = require("./src/routers/UserRouter")
const cookieParser = require("cookie-parser")
require("dotenv").config()
require('./src/database/dbConnection')

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("<h1>Admin Panel</h1>");
})
//Listing 
app.use("/listing", ListingRouter)

//Users
app.use('/user', UserRouter)

//Activity
app.use('/activity', ActivityRouter)

//Blog
app.use('/blog', BlogRouter)

//Server
const port = process.env.PORT
app.listen(port, (err) => {
    try {
        if (!err) {
            console.log("Server loading...");
        }
    } catch (error) {
        throw (error)
    }
})