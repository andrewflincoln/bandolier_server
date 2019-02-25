const express = require('express')
const router = express.Router({mergeParams: true})
const userController = require('../controllers/users')
const authController = require('../controllers/auth')




router.post('/next', userController.getNext)
router.get('/:userId/:gettingId', userController.getOne)
// router.get('/', userController.getAll)

router.post('/search', userController.searchUsers)
router.put('/', userController.updateUser)
router.post('/', userController.createUser)




// router.use('/search', authController.authenticated, authController.isSelf )




module.exports = router
