const questionsModel = require('../models/questions')

function getAllQuestions(req, res, next) {
  questionsModel.getAllQuestions()
  .then(response => {
    if(!response) 
      return next ({status: 400, message: `Could not get users.`})
    res.status(200).send(response)
  }) 
  .catch(next)
}

function getNextQuestion(req, res, next) {
  questionsModel.getNextQuestion(req.params.userId)
  .then(response => {
    if(!response) return next({status: 400, message: 'Could not get question.'})

    res.send(response.rows[0])
  })
  .catch(next)
}

function compAnswers(req, res, next) {
  questionsModel.compAnswers(req.params.user1, req.params.user2)
  .then(response => {
    if(!response) 
      return next ({status: 400, message: `Could not get answers.`})
    res.status(200).send(response)
  }) 
  .catch(next)
}

function getUserQuestions(req, res, next) {
  questionsModel.getUserQuestions(req.params.userId)
  .then(response => {
    if(!response) 
      return next ({status: 400, message: `Could not get questions.`})
    res.status(200).send(response)
  }) 
  .catch(next)
}

function submitAnswer(req, res, next) {
  questionsModel.submitAnswer(req.body.userId, req.body.questionId, req.body.answer)
  .then(response => {
    if(!response) 
      return next ({status: 400, message: `Could not submit answer.`})//next is undefined. work on errors
    res.status(201).send(response)
  })
  .catch(next)
}






module.exports = {
  getAllQuestions, getUserQuestions, submitAnswer, getNextQuestion, compAnswers
}