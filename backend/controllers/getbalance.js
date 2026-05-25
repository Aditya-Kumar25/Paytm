const express = require("express")
const {Account,User} = require("../db")
const { authMiddleware } = require("../middleware")

async function getBalance(req,res){
    const {id} = req.body;

    const account = await Account.findOne({
        userId:id
    })

    if(!user){
        res.status(404).json({
            msg:"maujood nahi"
        })
    }

    res.status(200).json({
        balance:account.balance
    })
}

module.exports = getBalance;