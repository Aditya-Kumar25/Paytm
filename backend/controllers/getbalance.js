const express = require("express")
const {Account} = require("../db")
const { authMiddleware } = require("../middleware")

async function getBalance(req,res){
    
    const account = await Account.findOne({
        userId:req.userId
    })
    console.log(account)

    if(!account){
        res.status(404).json({
            msg:"maujood nahi"
        })
    }

    res.status(200).json({
        balance:account.balance
    })
}

module.exports = getBalance;