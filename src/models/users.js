const knex = require('../../db/index')
const bcrypt = require('bcrypt')
const questionsModel = require('./questions')



function getOne(userId) {
  console.log('get one model')
  return (
    knex('users')
    .where({'id': userId})
  )
}

function getNext(userId) { //Maybe clean up/combine these two. 
  return (                     
    knex.raw(`SELECT users.id, username, deal, bio, img_url,
    deal, influences, heroes, genre_1, genre_2, genre_3, bio, instr_1, instr_2, instr_3
    
    FROM users LEFT JOIN users_relations ON users.id=users_relations.user1_id
    
    WHERE users.id != ${userId} 
    AND NOT EXISTS(SELECT * FROM users_relations WHERE user1_id = ${userId} AND user2_id = users.id
        OR user1_id = users.id AND user2_id = ${userId} AND status = 'stopped')
  
    ORDER BY RANDOM() LIMIT 1;`)
  )
  .then( response => {
      return compAnswers(userId, response.rows[0].id, response.rows[0])
  })
}
function compAnswers(user1, user2, responseSoFar) {
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
    
      let same = 0
      for (let i = 0; i < user1.length; i++) {
        if (user1[i].answer===user2[i].answer) 
          same++
      }
      
      let match = (same/user1.length*100).toFixed(0)+`%`
      if (match === `NaN%`) match=`TBD%`
      console.log(`match pct: ${match}`)
      responseSoFar.match = match
      console.log('responseSoFar: ' + JSON.stringify(responseSoFar))
      return responseSoFar
  })
}



function getAll() {
  return (
    knex('users')
  )
}

function checkEmail(email){
  return (
    knex('users')
    .where({ 'email': email })
    .first()
  )
}

function createUser(username, email,
  password, deal, genre_1, 
  genre_2, genre_3, bio, 
  heroes, img_url, influences, instr_1, 
  instr_2, instr_3, looking_1, 
  looking_2, looking_3)       {
  //do bcrypt stuff here, search for user
  return checkEmail(email)
  .then(data => {
    if (data) throw {status: 400, message: 'User email already taken.'}

    return bcrypt.hash(password, 10)
  })
  .then(password => {
    return (
      knex('users').insert({username, email,
        deal, genre_1, 
        genre_2, genre_3, bio, 
        heroes, img_url, influences, instr_1, 
        instr_2, instr_3, looking_1, 
        looking_2, looking_3, hashed_password: password} )
      .returning('*')
    )
  })
  .then(function([data]) {
    delete data.hashed_password
    return data
  })
}

function updateUser(username, email,
  password, deal, genre_1, 
  genre_2, genre_3, bio, 
  heroes, influences, instr_1, 
  instr_2, instr_3, looking_1, 
  looking_2, looking_3
) {

  console.log(`updating user`)
  return (
    knex('users').insert({username, email,
      deal, genre_1, 
      genre_2, genre_3, bio, 
      heroes, influences, instr_1, 
      instr_2, instr_3, looking_1, 
      looking_2, looking_3, hashed_password: password} )
    .returning('*')
  )
}


function searchUsers(genre_1, instr_1, heroes, influences) { // '' default leaves you off if all slots full
  return  knex.raw(`SELECT * FROM users 
  
  WHERE (genre_1 ='${genre_1}' OR genre_2 = '${genre_1}' OR genre_3 = '${genre_1}')
  
  AND (instr_1 = '${instr_1}' OR instr_2 = '${instr_1}' OR instr_3 = '${instr_1}')
  
  AND upper(heroes) LIKE upper('%${heroes}%')
  
  AND upper(influences) LIKE upper('%${influences}%');` 
 
    
  
  )
}




module.exports = {
  getOne,
  getAll,
  createUser,
  updateUser,
  searchUsers,
  checkEmail,
  getNext,
  compAnswers
 
}