
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_relations').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_relations').insert([
        {id: 1, user1_id: 1, user2_id: 3, status: 'stopped'}
  
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_relations_id_seq', (SELECT MAX(id) FROM users_relations));`
      )
    })
};




