
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {key: 1, sender_id: 3, receiver_id: 2, body: `hey, i like your style! let's jam sometime.`},
        {key: 2, sender_id: 2, receiver_id: 3, body: `Um no. #BLOCKED`},
        {key: 3, sender_id: 3, receiver_id: 2, body: ` :( `},
        {key: 4, sender_id: 2, receiver_id: 1, body: `tour starts tomorrow, you in?`},
        {key: 5, sender_id: 1, receiver_id: 2, body: `READY FOR TOUR`},
        {key: 6, sender_id: 2, receiver_id: 1, body: `ok sweet`},
        {key: 7, sender_id: 13, receiver_id: 2, body: `need a drummer? I am one.`},
        {key: 8, sender_id: 2, receiver_id: 13, body: `just filled the spot...but think we're not quite each other's types anyway maybe?`},
        {key: 9, sender_id: 13, receiver_id: 2, body: `Oh yeah huh guess not lol. glhf`},

      ]).then(() => {
        return knex.raw( //switch id for key here?
          `SELECT setval('messages_key_seq', (SELECT MAX(key) FROM messages));`
        )
      })
    });
};


