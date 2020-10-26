const express = require('express')
const {check} = require('express-validator')
const router = express.Router()

const UsersControllers = require('../controllers/users-controllers')

router.get('/', UsersControllers.getUsers)
router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email')
      .normalizeEmail() //Test@test.com => test@test.com
      .isEmail(),
    check('password').isLength({min: 6}),
  ],
  UsersControllers.signup
)
router.post('/login', UsersControllers.login)

module.exports = router
