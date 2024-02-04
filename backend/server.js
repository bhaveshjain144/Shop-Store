const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleware/errorMiddleware")
const app = express()


// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))      // handle data comes via url
app.use(bodyParser.json())     // body parser helps pass the information/data from frontend to backend by converting it into an object


// Routes Middleware
app.use("/api/users", userRoute)


// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
})

//Error Middleware
app.use(errorHandler);

// connect to mongodb
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
        console.log("Database connected successfully")
    })
})
.catch((err) => console.log(err))