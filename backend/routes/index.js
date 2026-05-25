const express = require("express");
const userRouter = require("./user")
const transfers = require("./transfer")

const router = express.Router();

router.use('/user',userRouter);
router.use('/money',transfers);

module.exports = router;