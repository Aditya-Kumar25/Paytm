const express = require("express")
const mongoose = require("mongoose");
const {Account} = require("../db")
const { authMiddleware } = require("../middleware")

async function Transaction(req,res){
    const session = await mongoose.startSession();

    session.startTransaction();

    const {amount , to } = req.body;

    const account = await Account.findOne({userId:req.userId}).session(session);

    if(!account || account.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"Insufficient balance"
        })
    }

    const toaccount = await Account.findOne({userId : to}).session(session);

    if(!toaccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"not a user of our baink"
        })
    }
    
    await Account.updateOne({userId : req.userId},{$inc:{balance:-amount}}).session(session)
    await Account.updateOne({userId : to},{$inc:{balance:amount}}).session(session)


    await session.commitTransaction();
    session.endSession();
    res.json({
        msg:"Transaction Succesfull"
    })

}

module.exports = Transaction;