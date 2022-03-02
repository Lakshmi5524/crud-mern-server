const mongoose = require("mongoose")
//const colors = require("colors")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {})
    console.log(`MongoDb Connected ${conn}`)
  } catch (error) {
    console.log(`Error:${error.message}`)
    process.exit()
  }
}

module.exports = connectDB
