const express = require("express");
const SignIn = require("../controllers/signin")
const SignUp = require("../controllers/signup")
const Update = require("../controllers/pchange")
const {authMiddleware} = require("../middleware")


const  router = express.Router();


router.post('/signin',SignIn);
router.post('/signup',SignUp);
router.patch('/update',authMiddleware,Update)

module.exports = router;