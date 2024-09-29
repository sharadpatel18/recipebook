const bcrypt = require('bcrypt')
const User = require('../Models/AuthModel')
const jwt = require('jsonwebtoken')

const Signup = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            res.status(409)
                .json({ message: "user is already existed", success: false })
        }
        const usermodule = new User({ name, email, password, isAdmin })
        usermodule.password = await bcrypt.hash(password, 10)
        usermodule.save()
        res.status(201)
            .json({ message: "signup successfully", success: true })
    } catch (error) {
        console.log(error);
        res.status(500)
            .json({ message: "internal server error", success: false })
    }
}
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            res.status(409)
                .json({ message: "user is not existed", success: false })
        }
        const comparePass = await bcrypt.compare(password, user.password)
        if (!comparePass) {
            return res.status(403)
                .json({ message: "email and password is wrong" })
        }
        const Token = jwt.sign({
            email: user.email,
            name: user.name,
            id: user._id
        },
            process.env.SECRET_KEY, { expiresIn: "24h" }
        )
        res.status(201)
            .json({
                message: "Login successfully", success: true, Token, email, name: user.name, id: user._id
            })
    } catch (error) {
        res.status(500)
            .json({ message: "internal server error", success: false })
    }
}

module.exports = { Signup, Login }