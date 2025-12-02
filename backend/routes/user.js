    const express = require("express");
    const zod = require("zod");
    const bcrypt = require("bcrypt")
    const { User} = require("../db");
    const JWT_SECRET = require("../config");
    const jwt = require("jsonwebtoken")
    const router = express.Router();
    const signupSchema = zod.object({
        firstName :zod.string(),
        lastName: zod.string(),
        username: zod.string().email(),
        password:zod.string()
    })
    const signinSchema = zod.object({
        username: zod.string().email(),
        password:zod.string()
    })
    function createToken(userId,expiresIn="1h"){
        return jwt.sign({userId},JWT_SECRET,{expiresIn})
    }

    router.post("/signup",async(req,res)=>{
        const body = req.body;
        const {success} = signupSchema.safeParse(req.body)

        if(!success){
            return res.json({
                msg:"invalid input"
            })
        }

        const user = await User.findOne({
            username : body.username
        })
        if(user){
            return res.json({
                msg:"Email ready taken"
            })
        }

        const hashed = await bcrypt.hash(body.password,10);

        const dbUser = await  User.create({
            firstName:body.firstName,
            lastName:body.lastName,
            username:body.username,
            password:hashed
        });
        const token = createToken(dbUser._id,"1h")
        res.json({
            message:"User Created successfully",
            token:token
        })
    })

    router.post("/signin",async (req,res)=>{
        
        try {
            const body = req.body;
        const {success} = signinSchema.safeParse(req.body)   

        if(!success){
            return res.json({
                msg:"invalid input"
            })
        }
        const user = await User.findOne({
            username : body.username
        })
        if(!user){
            return res.json({
                msg:"User doesn't exist"
            })
        }
        const match = await bcrypt.compare(body.password,user.password)
        if(!match){
            return res.status(401).json({msg:"invalid Credentials"})
        }
        const token = jwt.sign(
            {id:user._id},
            JWT_SECRET,
            {expiresIn:"1h"}
        )
        res.json({
            token
        })
        } catch (error) {
            res.status(400).json({msg:"server error"})
        }
        
    })
    module.exports = router;