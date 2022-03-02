const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/db")
const userRouters = require("./routes/userRoutes")
const noteRoutes = require("./routes/noteRoutes")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js")
const path = require("path")

const app = express()
app.use(cors())
dotenv.config()

connectDB()
app.use(express.json())

app.use("/api/users", userRouters)
app.use("/api/notes", noteRoutes)

//__dirname = path.resolve()
//if (process.env.NODE_ENV === "production") {
//  app.use(express.static(path.join(__dirname, "/frontend/build")))

//  app.get("*", (req, res) => {
//    res.sendFile(path.resolve(__dirname, "/frontend", "build", "index.html"))
//  })
//} else {
//  app.get("/", (req, res) => {
//    res.send("My apis running ")
//  })
//}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on  ${PORT}`))
