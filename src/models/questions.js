const knex = require('../../db/index')


function getAllQuestions() {
  return (
    knex('questions')
  )
}

//this allows duplicate entries -- theoretically, impossible to get there
function submitAnswer(userId, questionId, answer) {
  return (
    knex('users_answers_questions')
    .insert([{user_id: userId, question_id: questionId, answer: answer}])  
  ).then(response => {
    return response
  })
}


// All answered questions with text and answers
function getUserQuestions(userId) {
  return (
    knex('questions')
    .select('question_id', 'user_id', 'question_text', 'option_a', 'option_b', 'option_c', 'option_d', 'answer')
    .join('users_answers_questions', 'users_answers_questions.question_id', 'questions.id')
    .where('users_answers_questions.user_id', userId)
  )
  .then(response => {
    return response
  })
}

//function combining gets here to give unanswered questions only?


//just Ids and answers
// function getUserQuestions(userId) {
//   return (
//     knex('questions')
//     .select('question_id','user_id', 'answer')
//     .join('users_answers_questions', 'users_answers_questions.question_id', 'questions.id')

//   )
//   .then(response => {
//     return response
//   })
// }


module.exports = {
  getAllQuestions, getUserQuestions, submitAnswer
}