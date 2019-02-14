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
  console.log('get next C')
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


function compAnswers(user1, user2) {
  return (
    knex.raw(`SELECT user_id, questions.id, answer

    FROM users_answers_questions LEFT JOIN questions ON questions.id=users_answers_questions.question_id

    WHERE EXISTS(SELECT * FROM users_answers_questions WHERE user_id=${user1} AND question_id=questions.id)

    AND EXISTS (SELECT * FROM users_answers_questions WHERE user_id=${user2} AND question_id=questions.id)

    AND user_id=${user1} OR user_id=${user2}`)
  )
  .then(response => {
      const array=response.rows
      let user1 = array.splice(0, array.length/2)
      let user2 = array
      console.log(user1, user2)
      let same = 0
      for (let i = 0; i < user1.length; i++) {
        if (user1[i].answer===user2[i].answer) 
          same++
      }
      console.log(same)
      return (same/user1.length*100).toFixed(0)+`%`
  })
}




module.exports = {
  getAllQuestions, getUserQuestions, submitAnswer, getNextQuestion, compAnswers
}