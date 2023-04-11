const db = require('../models')
const bcrypt = require('bcryptjs')

const { hashPassword, comparePassword } = require('../functions/password')
const { tokenGenerator, tokenVerify } = require('../functions/token')
const saltRounds = 10

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
            if (!user || !(await comparePassword(body.password, user.password))) {
                error.message = "Email or password is incorect";
                return next(error);
            }
            // Check user verification
            if (!user.verification_email) {
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
                message: "Successfully",
                role: user.role
            });
        }
        catch (error) {
            next(error)
        }
    },

    Register: async (req, res, next) => {
        const { body } = req
        let error = new Error();
        // Validation data
        if (!body.first_name || !body.last_name || !body.email || !body.password) {
            error.message = "Fill the all fields to register"
            error.status = 400;
            return next(error);
        }
        if (body.password != body.cofirm_password) {
            error.message = "Confirm your password"
            error.status = 400;
            return next(error);
        }
        // Find user
        const findEmail = await User.findOne({ email: body.email });
        if (findEmail) {
            error.message = "Account already exist";
            return next(error);
        }
        // Hashing password
        const password_hash = await hashPassword(body.password);
        // Create user
        const user = await User.create({
            ...body,
            password: password_hash,
            createdAt: new Date(),
        });
        if (!user) {
            next(error)
        }
        // Response
        res.json({
            success: true,
            message: "Successfully, Check your email to active your account",
        });
    },

    ForgetPassword: async (req, res, next) => {
        const { body } = req
        let error = new Error();
        // Validation data
        if (!body.email) {
            error.message = "invalid credentials"
            error.status = 400;
            return next(error);
        }
        // Find user
        const user = await User.findOne({ email: body.email });
        if (!user) {
            error.message = "Account not found";
            return next(error);
        }
        // Create token
        const _token = await tokenGenerator(
            { id: user._id, email: user.email },
            "2d"
        );
        // Send email

        // Response
        res.json({
            success: true,
            message: "Successfully, Check your email to reset your password",
            _token
        });
    },

    Logout: async (req, res, next) => {
        res.clearCookie("token");
        res.json({
            success: true,
            message: "Successfully",
        });
    }
}
