const router = require('express').Router();
const {SignupValidation,LoginValidation} = require('../Middlewares/AuthMiddle')
const {Signup,Login,ForgetPassword,Resetpassword} = require('../Controllers/AuthControllers')

router.post("/signup" , SignupValidation , Signup)

router.post('/login' , LoginValidation , Login)

router.post("/forgetpassword" , ForgetPassword)

router.post("/resetpassword/:id" , Resetpassword)

module.exports = router;