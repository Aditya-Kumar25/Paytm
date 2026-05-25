const express = require("express")
const {User} = require("../db")

async function GetUsers(req,res) {
    const filter = req.query.filter||"";

    const user = await User.find(
        $or[{
            firstname:{
                $regex:filter
            },
            lastname:{
                $regex:filter
            }
        }]
    )

    res.json({
        user:users.map(user=>{
            username:user.username;
            firstname:user.firstname;
            lastname:user.lastname;
            _id:user._id

        })
    })
}