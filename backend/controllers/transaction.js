const express = require("express")
const mongoose = require("mongoose");
const {Account} = require("../db")
const { authMiddleware } = require("../middleware")

async function Transaction(req,res){
    const session = mongoose.startSession();

    (await session).startTransaction;

    const {amount , to } = req.body;

    const account = await Account.findOne({userId:req.id}).session(session);

    if(!account || account.balance<amount){
        (await session).abortTransaction();
        return res.status(400).json({
            msg:"Insufficient balance"
        })
    }

    const toaccount = await AccountfindOne({userId : to}).session(session);

    if(!toaccount){
        (await session).abortTransaction();
        return res.status(400).json({
            msg:"not a user of our baink"
        })
    }
    
    await Account.updateOne({userId : req.userId},{$inc:{balance:-amount}}).session(session)
    await Account.updateOne({userId : to},{$inc:{balance:amount}}).session(session)


    (await session).commitTransaction();
    res.json({
        msg:"Transaction Succesfull"
    })

}

module.exports = Transaction;