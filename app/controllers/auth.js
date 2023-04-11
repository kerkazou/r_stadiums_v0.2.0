const db = require('../models')
const bcrypt = require('bcryptjs')

// Create Main Model
const User = db.user

module.exports = {
    Login: async (req, res, next) => {
        const { body } = req
        let error = new Error();
        try {
            // Validation data
            if (!body.email || !body.password) {
                error.message = "invalid credentials"
                error.status = 400;
                return next(error);
            }
            // Find user
            const user = await User.findOne({ email: body.email })
            if (!user || !(await bcrypt.compare(body.password, user.password))) {
                error.message = "Email or password is incorect";
                return next(error);
            }
            // Check user verification
            if (!user.verification) {
                error.message = "Please verify you email first";
                error.status = 401;
                return next(error);
            }
            // Check user status
            if (!user.status) {
                error.message = "You can't to login";
                return next(error);
            }
            // Create token
            const _token = await tokenGenerator(
                { id: user._id, email: user.email },
                "2d"
            );
            // Set cookie
            res.cookie("token", _token, {
                httpOnly: true,
                secure: process.env.NODE_ENV,
                maxAge: 1000 * 60 * 60 * 24 * 2,
            });
            // Response
            res.json({
                success: true,
            });
        }
        catch (error) {
            next(error)
        }
    },
    Register: async (req, res, next) => {
        // const { body } = req
        // let error = new Error();
        // // Validation data
        // if (!body.username || !body.email || !body.password || body.password != body.cofirm_password) {
        //     error.message = "Fill the all fields to register"
        //     error.status = 400;
        //     return next(error);
        // }
        // Find user
        // const findEmail = await User.findOne({ email: body.email });
        // Create user

        // Send email

        // const findEmail = await User.findOne({ email: body.email });
        // if (findEmail) throw Error("Email already exist");
        // const hash = await bcrypt.hash(body.password, saltRounds);
        // const clientRole = await Role.findOne({ name: "client" });
        // const user = await User.create({
        //     ...body,
        //     password: hash,
        //     roles: clientRole._id,
        //     verification: false,
        //     status: true,
        // });
        // if (user) {
        //     mailer.main("register", user);
        //     res.json({ message: "Successfully, Check your email to active your account", email: body.email, password: body.password });
        // }
        // if (!user) throw Error("User not created try again");
    }
}