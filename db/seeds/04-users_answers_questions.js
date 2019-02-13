
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_answers_questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_answers_questions').insert([
        {id: 1, user_id: 1, question_id: 1, answer:2},
        {id: 2, user_id: 1, question_id: 2, answer:3},
        {id: 3, user_id: 1, question_id: 3, answer:2},

        {id: 4, user_id: 2, question_id: 1, answer:4},
        {id: 5, user_id: 2, question_id: 2, answer:3},
        {id: 6, user_id: 2, question_id: 2, answer:2},

      

        {id: 7, user_id: 3, question_id: 1, answer:2},
        {id: 8, user_id: 3, question_id: 2, answer:1},
        {id: 9, user_id: 3, question_id: 2, answer:2},

        {id: 10, user_id: 4, question_id: 1, answer:3},
        {id: 11, user_id: 4, question_id: 2, answer:3},
        {id: 12, user_id: 4, question_id: 3, answer:4},

        {id: 13, user_id: 5, question_id: 1, answer:1},
        {id: 14, user_id: 5, question_id: 2, answer:4},
        {id: 15, user_id: 5, question_id: 3, answer:1},
      ]).then(() => {
        return knex.raw(
          `SELECT setval('users_answers_questions_id_seq', (SELECT MAX(id) FROM users_answers_questions));`
        )
      })
    });
};
