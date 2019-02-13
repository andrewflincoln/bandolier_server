const knex = require('../../db/index')


function getAllQuestions() {
  return (
    knex('questions')
  )
}




function getNextQuestion(userId) {
  return (
    knex.raw(`SELECT questions.id, question_text, option_a, option_b, option_c, option_d

    FROM questions
    WHERE NOT EXISTS(SELECT * FROM users_answers_questions WHERE user_id=${userId} AND question_id= questions.id)
     
    ORDER BY RANDOM() LIMIT 1;`)
  )
}

// function getUserQuestions(userId) {
//   return (
//     knex('questions')
//     .select('question_id', 'user_id', 'question_text', 'option_a', 'option_b', 'option_c', 'option_d', 'answer')
//     .join('users_answers_questions', 'users_answers_questions.question_id', 'questions.id')
//     .where('users_answers_questions.user_id', userId)
//   )
//   .then(response => {
//     return response
//   })
// }



    // FROM questions LEFT JOIN users_answers_questions 
    // ON questions.id = users_answers_questions.question_id






function getNext(userId) {
  return (
    knex.raw(`SELECT users.id, username, deal, bio, img_url,
    deal, influences, heroes, genre_1, genre_2, genre_3, bio, instr_1, instr_2, instr_3
    
    FROM users LEFT JOIN users_relations ON users.id=users_relations.user1_id
    
    WHERE users.id != ${userId} 
    AND NOT EXISTS(SELECT * FROM users_relations WHERE user1_id = ${userId} AND user2_id = users.id
        OR user1_id = users.id AND user2_id = ${userId} AND status = 'stopped')

  
    ORDER BY RANDOM() LIMIT 1;`)
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
  getAllQuestions, getUserQuestions, submitAnswer, getNextQuestion
}