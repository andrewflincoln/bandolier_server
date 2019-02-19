
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
        {id: 6, user_id: 2, question_id: 5, answer:2},

      

        {id: 7, user_id: 3, question_id: 1, answer:1},
        {id: 8, user_id: 3, question_id: 2, answer:4},
        {id: 9, user_id: 3, question_id: 3, answer:2},

        {id: 10, user_id: 4, question_id: 1, answer:3},
        {id: 11, user_id: 4, question_id: 2, answer:4},
        {id: 12, user_id: 4, question_id: 3, answer:1},

        {id: 13, user_id: 5, question_id: 1, answer:2},
        {id: 14, user_id: 5, question_id: 8, answer:4},
        {id: 15, user_id: 5, question_id: 3, answer:3},

        {id: 16, user_id: 6, question_id: 1, answer:3},
        {id: 17, user_id: 6, question_id: 2, answer:2},
        {id: 18, user_id: 6, question_id: 3, answer:4},

        {id: 19, user_id: 7, question_id: 1, answer:1},
        {id: 20, user_id: 7, question_id: 2, answer:4},
        {id: 21, user_id: 7, question_id: 3, answer:1},

        {id: 22, user_id: 8, question_id: 1, answer:3},
        {id: 23, user_id: 8, question_id: 2, answer:1},
        {id: 24, user_id: 8, question_id: 3, answer:2},


        {id: 25, user_id: 9, question_id: 1, answer:2},
        {id: 26, user_id: 9, question_id: 9, answer:4},
        {id: 27, user_id: 9, question_id: 3, answer:1},


        {id: 28, user_id: 10, question_id: 1, answer:2},
        {id: 29, user_id: 10, question_id: 2, answer:2},
        {id: 30, user_id: 10, question_id: 3, answer:4},

        {id: 31, user_id: 11, question_id: 1, answer:1},
        {id: 32, user_id: 11, question_id: 2, answer:3},
        {id: 33, user_id: 11, question_id: 3, answer:4},





      ]).then(() => {
        return knex.raw(
          `SELECT setval('users_answers_questions_id_seq', (SELECT MAX(id) FROM users_answers_questions));`
        )
      })
    });
};
