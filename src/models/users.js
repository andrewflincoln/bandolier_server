const knex = require('../../db/index')


function getOne(userId) {
  return (
    knex('users')
    .where({'id': userId})
  )
}

function getAll() {
  return (
    knex('users')
  )
}

function createUser(username, email,
  password, deal, genre_1, 
  genre_2, genre_3, bio, 
  heroes, influences, instr_1, 
  instr_2, instr_3, looking_1, 
  looking_2, looking_3
) {
  //do bcrypt stuff here, search for user
  console.log(`creating user`)
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

function searchUsers(genre, instr, heroes, influences) {
  console.log(genre)
  return (
    knex('users')
    .where({genre_1: genre})
  )
}




module.exports = {
  getOne,
  getAll,
  createUser,
  updateUser,
  searchUsers
 
}