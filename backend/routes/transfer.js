const express = require("express")
const Transaction = require("../controllers/transaction")
const getBalance = require("../controllers/getbalance")

const {authMiddleware} = require("../middleware")

const router = express.Router()

router.update("/transfer",authMiddleware,Transaction)
router.get

module.exports = router;