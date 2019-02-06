const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/users')
// const authController = require('../controllers/auth')

router.get('/', userController.getAll)
router.get('/:userId', userController.getOne)
// router.post('/', userController.create)


module.exports = router
