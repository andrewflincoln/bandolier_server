
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tracks').del()
    .then(() => knex('users_answers_questions').del())
    .then(() => knex('questions').del())
    .then(() => knex('messages').del())
    .then(() => knex('users').del())
}
