const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.post('/login', authController.Login)
router.post('/register', authController.Register)
router.get('/verification-email/:token', authController.VerificationEmail)
router.post('/forget-password', authController.ForgetPassword)
router.get('/logout', authController.Logout)

module.exports = router