const express = require('express')
const router = express.Router({mergeParams: true})
const messagesController = require('../controllers/messages')
const authController = require('../controllers/auth')


router.use('/', authController.authenticated, authController.isSelf)

router.get('/convos/:userId', messagesController.getConvos) //all users messaged with, by most recent
router.get('/:user1/:user2', messagesController.getMessages) //all messages between these two users

router.post('/', messagesController.postMessage)




module.exports = router
