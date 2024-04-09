const bcrypt = require('bcrypt');
const User = require('../models/user');
const { signUpSchema } = require('../helper/validation');

const signUp = async (req, res) => {
    try {
        const { error } = signUpSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                msg: error.details[0].message
            }) 
        }
        const { name, email, password } = req.body;

        const userInfo = await User.findOne({ email: email })

        if (userInfo) {
            return res.status(400).json({
                msg: "Email already registered."
            })
        }

        const hashPassword = await bcrypt.hashSync(password, 10);

        const user = await User.create({
            name: name,
            email: email,
            password: hashPassword
        })

        return res.status(200).json({
            msg: "Account created successfully",
            data: { user }
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Internal server error, please try again"
        })
    }
}

module.exports = {
    signUp,
}