
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, sender_id: 3, receiver_id: 2, body: `hey, i like your style! let's jam sometime.`},
        {id: 2, sender_id: 2, receiver_id: 3, body: `Um no. #BLOCKED`},
        {id: 3, sender_id: 3, receiver_id: 2, body: ` :( `},
        {id: 4, sender_id: 2, receiver_id: 1, body: `tour starts tomorrow, you in?`},
        {id: 5, sender_id: 1, receiver_id: 2, body: `READY FOR TOUR`},
        {id: 6, sender_id: 2, receiver_id: 1, body: `ok sweet`},
        {id: 7, sender_id: 13, receiver_id: 2, body: `need a drummer? I am one.`},
        {id: 8, sender_id: 2, receiver_id: 13, body: `just filled the spot...but think we're not quite each other's types anyway maybe?`},
        {id: 9, sender_id: 13, receiver_id: 2, body: `Oh yeah huh guess not lol. glhf`},

      ]).then(() => {
        return knex.raw(
          `SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages));`
        )
      })
    });
};


