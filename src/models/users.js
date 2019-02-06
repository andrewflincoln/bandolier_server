const knex = require('../../db/index')


function getOne(userId) {
  console.log('we are indeed at the getOne model')
  return (
    knex('users')
    .where({'id': userId})
  )
}

function getAll() {
  console.log('we are indeed at the getAll model')
  return (
    knex('users')
  )
}

module.exports = {
  getOne,
  getAll
}