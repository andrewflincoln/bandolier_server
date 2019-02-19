const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/users')
// const authController = require('../controllers/auth')

router.get('/:userId', userController.getOne)
router.get('/next/:userId', userController.getNext)
router.get('/', userController.getAll)

router.post('/search', userController.searchUsers)
router.put('/', userController.updateUser)
router.post('/', userController.createUser)



module.exports = router
