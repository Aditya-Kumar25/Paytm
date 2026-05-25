const express = require("express");
const SignIn = require("../controllers/signin")
const SignUp = require("../controllers/signup")

const  router = express.Router();


router.post('/signin',SignIn);
router.post('/signup',SignUp);

module.exports = router;