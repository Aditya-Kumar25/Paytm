const express = require("express");
const zod = require("zod");
const { User} = require("../db");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken")
const router = express.Router();
const signupSchema = zod.object({
    firstnfirstName :zod.string(),
    lastName: zod.string(),
    username: zod.string(),
    password:zod.string()
})

router.post("/signup",async(req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body)

    if(!success){
        return res.json({
            msg:"invalid input"
        })
    }

    const user = User.findOne({
        username,email
    })
    if(user._id){
        return res.json({
            msg:"Email ready taken"
        })
    }

    const dbUser = await  User.create(body);
    const token = JsonWebTokenError.sign({
        userId: dbUser._id
    },JWT_SECRET)
    res.json({
        message:"User Created successfully",
        token:token
    })
})

router.post("/signin",async (req,res)=>{
    const body = req.body;
    
})
module.exports = router;