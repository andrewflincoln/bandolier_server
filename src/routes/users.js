const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/users')
// const authController = require('../controllers/auth')

router.get('/search/:genre/:instr', userController.searchUsers)
router.get('/', userController.getAll)
router.get('/:userId', userController.getOne)

router.post('/', userController.createUser)
router.put('/:userId', userController.updateUser)

module.exports = router
