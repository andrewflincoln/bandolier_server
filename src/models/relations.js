
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

function getPlaylist(userId) {
  return (
    knex.raw(`SELECT users.id, username, deal, bio, img_url,
    deal, influences, heroes, genre_1, genre_2, genre_3, bio, instr_1, instr_2, instr_3
    
    FROM users LEFT JOIN users_relations ON users.id=users_relations.user2_id
    
    WHERE user1_id = ${userId} AND status='played'
    
    ORDER BY users_relations.id DESC
    `)
//do we want an order here? 
  )
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
  getRel, setRel, getPlaylist
}