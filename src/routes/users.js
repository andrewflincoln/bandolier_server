const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/users')
// const authController = require('../controllers/auth')

router.get('/search/:genre/:instr', userController.searchUsers)

router.get('/:userId', userController.getOne)
router.get('/next/:userId', userController.getNext)
router.get('/', userController.getAll)

router.post('/', userController.createUser)
router.put('/:userId', userController.updateUser)


module.exports = router
