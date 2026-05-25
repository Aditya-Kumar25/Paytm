const express = require("express")
const Transaction = require("../controllers/transaction")
const getBalance = require("../controllers/getbalance")

const {authMiddleware} = require("../middleware")

const router = express.Router()

router.post("/transfer",authMiddleware,Transaction)
router.get('/balance',authMiddleware,getBalance)

module.exports = router;