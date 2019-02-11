
const knex = require('../../db/index')


function getRel(user_1, user_2) {
  return (
    knex('users_relations')
      .select('user1_id', 'user2_id', 'status')
      .where('user1_id', user_1)
      .andWhere('user2_id', user_2)
  )
  .then(response => {
    return response
  })
}

function setRel(user_1, user_2, status) {
  console.log('users: ' + user_1, user_2)
  return (
    knex('users_relations')
    .insert([{user1_id: user_1, user2_id: user_2, status: status}])
  )
  .then(response => {
    return response
  })
}



module.exports = {
  getRel, setRel
}