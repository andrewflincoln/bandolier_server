const questionsModel = require('../models/questions')

function getAllQuestions(req, res, next) {
  //error
  questionsModel.getAllQuestions()
  .then(response => {
    if(!response) return next ({status: 400, message: `Could not get users.`})
    res.send(response)
  }) 
  .catch(next)
}

function getUserQuestions(req, res, next) {
  //error
  questionsModel.getUserQuestions(req.params.userId)
  .then(response => {
    if(!response) return next ({status: 400, message: `Could not get questions.`})
    res.send(response)
  }) 
  .catch(next)
}

function submitAnswer(req, res, next) {
  questionsModel.getUserQuestions(req.body.userId, req.body.questionId, req.body.answer)
  .then(response => {
  res.send(response)
  })
  .catch(next)
  
}




module.exports = {
  getAllQuestions, getUserQuestions, submitAnswer
}