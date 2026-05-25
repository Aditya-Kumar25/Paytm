
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

const accounts = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        reequired :true
    },
    balance:{
        type:Number,
        required:true
    }

})
const User = mongoose.model("User",userSchema)
const Account = mongoose.model("Account",accounts)

module.exports={
    User
}