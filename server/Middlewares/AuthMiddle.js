const joi = require('joi')

const SignupValidation = (req,res,next) => {
    const schema = joi.object({
        name:joi.string().min(2).max(50).required(),
        email:joi.string().email().max(50).required(),
        password:joi.string().min(2).max(50).required(),
        isAdmin:joi.boolean().required(),
    })

    const {error} = schema.validate(req.body)
    if (error) {
        res.status(400)
            .json({message:"bad request" , error})
    }
    next();
}

const LoginValidation = (req,res,next) => {
    const schema = joi.object({
        email:joi.string().email().max(50).required(),
        password:joi.string().min(2).max(50).required(),
    })

    const {error} = schema.validate(req.body)
    if (error) {
        res.status(400)
            .json({message:"bad request" , error})
    }
    next();
}

module.exports={SignupValidation,LoginValidation}