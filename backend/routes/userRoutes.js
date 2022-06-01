const express = require('express')
const router = express.Router()
const { loginUser, getUser, registerUser } = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')


router.post('/login',  loginUser)
router.get('/me',   protect, getUser)
router.post('/',  registerUser)

   
module.exports = router