const express = require('express')
const router = express.Router({mergeParams: true})
const questionsController = require('../controllers/questions')
// const authController = require('../controllers/auth')

router.get('/', questionsController.getAllQuestions)
router.get('/:userId', questionsController.getUserQuestions)

router.post('/', questionsController.submitAnswer)


// router.post('/', questionsController.submitAnswer)



module.exports = router
