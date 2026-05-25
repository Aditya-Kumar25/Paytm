
const fs = require("fs");
const mongoose  = require("mongoose")

const data = fs.readFileSync(".env","utf-8")

// const db = data.split("=")[1].trim()
const db = data.substring(data.indexOf("=") + 1).trim()

mongoose.connect(db)

const userSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    username : String,
    email : String,
    password : String
})

const User = mongoose.model("User",userSchema)

module.exports={
    User
}