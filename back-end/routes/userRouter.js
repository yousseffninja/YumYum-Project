const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
var { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth')

router.post('/register', [check("email", "invalid email").isEmail()], userCtrl.register)

router.post('/login', [check("email", "invalid email").isEmail()], userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth,  userCtrl.getUser)



module.exports = router
