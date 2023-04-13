const express = require('express')
const router = express.Router()
const authController = require('../controllers/category')

router.get('/get', authController.GetAll)

module.exports = router