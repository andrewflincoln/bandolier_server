const knex = require('../../db/index')


function getAllQuestions() {
  return (
    knex('questions')
  )
}


function getNextQuestion(userId) {
  return (
    knex.raw(`SELECT questions.id, question_text, option_1, option_2, option_3, option_4

    FROM questions
    WHERE NOT EXISTS(SELECT * FROM users_answers_questions WHERE user_id=${userId} AND question_id= questions.id)
    ORDER BY RANDOM() LIMIT 1;`)
  )
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
    .select('question_id', 'user_id', 'question_text', 'option_1', 'option_2', 'option_3', 'option_4', 'answer')
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
  getAllQuestions, getUserQuestions, submitAnswer, getNextQuestion, compAnswers
}