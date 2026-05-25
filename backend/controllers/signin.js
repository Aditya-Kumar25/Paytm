const express = require("express")
const {signinSchema} = require("../validation")
const {authMiddlware} = require("../middleware")
const {User} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")



async function SignIn(require,response,authMiddlware){
    const payload = require.body;
    const parsed = signinSchema.safeParse(payload);

    if(!parsed.success){
        response.status(200).json({msg:"enter all valid fields"})
        return;
    }
 
    const exists = await User.findOne({
        email:parsed.data.email
    })

    if(!exists){
        response.status(404).json({
            msg:"usr not found"
        })
        return;
    }

    if(exists.password!==parsed.data.password){
         response.status(404).json({
            msg:"password not matched"
        })
        return;
    }

    const token = jwt.sign(
        {
        id:exists.id,
        username:exists.username
        },
        JWT_SECRET,
        {expiresIn : "1d"},
    );
    
    response.status(200).json({
        
            token,
            user:{
            id:exists.id,
            username:exists.username,
            email:exists.email,
            },
    })

}

module.exports = SignIn