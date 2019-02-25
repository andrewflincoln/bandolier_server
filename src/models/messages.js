const knex = require('../../db/index')

function getMessages(user1, user2) {
  return knex.raw(
    `SELECT * FROM messages 
    WHERE sender_id = ${user1} AND receiver_id = ${user2}
    OR sender_id = ${user2} AND receiver_id = ${user1}
    ORDER BY key;`
  )
}

function getConvos(userId) { //sender vs receiver   //need to get users.id across?
  return knex.raw(
    `SELECT DISTINCT ON (users.id) users.id, messages.key, username, img_url, body
    FROM users LEFT JOIN messages ON sender_id=users.id
    WHERE (receiver_id = ${userId} OR sender_id=${userId})
    AND NOT users.id = ${userId};`
  )
  .then(response => {
    return response.rows.sort(function (a, b) { //probably possible in SQL, except it is impossible.
      return b.key - a.key;
    });
  })
  //attach latest message

}

function postMessage (sender_id, receiver_id, body) {
  return knex('messages').insert({sender_id, receiver_id, body})
  .returning('*')
}


module.exports = {getMessages, postMessage, getConvos}