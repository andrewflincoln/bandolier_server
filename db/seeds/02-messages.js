
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, sender_id: 3, receiver_id: 2, body: `hey, i like your style! let's jam sometime.`},
        {id: 2, sender_id: 1, receiver_id: 4, body: `dude you gotta get off here. #BLOCKED`},
        {id: 3, sender_id: 5, receiver_id: 1, body: `let's hang out and trade drum secrets! drummers rule!`},
        {id: 4, sender_id: 2, receiver_id: 1, body: `tour starts tomorrow, you in?`},
        {id: 5, sender_id: 4, receiver_id: 3, body: `saw you needed a bass player, gimme a shot!`}
      ]).then(() => {
        return knex.raw(
          `SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages));`
        )
      })
    });
};


