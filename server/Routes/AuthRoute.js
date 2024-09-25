const router = require('express').Router();
const {SignupValidation,LoginValidation} = require('../Middlewares/AuthMiddle')
const {Signup,Login} = require('../Controllers/AuthControllers')

router.post("/signup" , SignupValidation , Signup)

router.post('/login' , LoginValidation , Login)

module.exports = router;