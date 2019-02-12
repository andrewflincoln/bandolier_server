const knex = require('../../db/index')
const bcrypt = require('bcrypt')


function getOne(userId) {
  console.log('get one model')
  return (
    knex('users')
    .where({'id': userId})
  )
}

function getNext(userId) {
  return (
    knex.raw(`SELECT users.id, username, deal, bio, img_url,
    deal, genre_1, genre_2, genre_3, bio, instr_1, instr_2, instr_3
    
    FROM users LEFT JOIN users_relations ON users.id=users_relations.user1_id
    
    WHERE users.id != ${userId} 
    AND NOT EXISTS(SELECT * FROM users_relations WHERE user1_id = ${userId} AND user2_id = users.id
        OR user1_id = users.id AND user2_id = ${userId} AND status = 'stopped')

  
    ORDER BY RANDOM() LIMIT 1;`)
  )
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
  heroes, influences, instr_1, 
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
        heroes, influences, instr_1, 
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

//heroes/influences - add later if appropriate. or delete.
function searchUsers(genre, instr, heroes, influences) {
  return  (
    knex('users')
    .where({genre_1: genre})
    .andWhere({instr_1: instr})
  )
}




module.exports = {
  getOne,
  getAll,
  createUser,
  updateUser,
  searchUsers,
  checkEmail,
  getNext
 
}