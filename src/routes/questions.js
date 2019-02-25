const express = require('express')
const router = express.Router({mergeParams: true})
const questionsController = require('../controllers/questions')
const authController = require('../controllers/auth')






router.get('/', questionsController.getAllQuestions)
router.get('/:userId', questionsController.getUserQuestions) //all qs a user has answered
router.get('/next/:userId', questionsController.getNextQuestion)
router.get('/comp/:user1/:user2', questionsController.compAnswers)

// router.use('/', authController.authenticated, authController.isSelf )
router.post('/', questionsController.submitAnswer)


module.exports = router
