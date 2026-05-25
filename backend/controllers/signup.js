const express = require("express")
const {signupSchema} = require("../validation")
const { User} = require("../db")
async function SignUp(require,response){
    const payload = require.body;
    console.log(payload);
    const parsed = signupSchema.safeParse(payload);

    if(!parsed.success){
        response.status(400).json({msg:"enter all valid fields"})
        return;
    }
    const existing = await User.findOne({
        email:parsed.data.email

    })
    if(existing){
        response.status(403).json({
            msg:"already exists"
        })
        return;
    }
    const user = await User.create({
        firstname:parsed.data.firstname,
        lastname : parsed.data.lastname,
        username:parsed.data.username,
        email:parsed.data.email,
        password : parsed.data.password
    })
    response.status(200).json({
        msg:"user created successfully"
    })
}

module.exports = SignUp