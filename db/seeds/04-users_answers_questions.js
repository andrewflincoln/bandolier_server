
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_answers_questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_answers_questions').insert([
        {id: 1, user_id: 1, question_id: 1, answer:'b'},
        {id: 2, user_id: 1, question_id: 2, answer:'c'},
        {id: 3, user_id: 1, question_id: 3, answer:'b'},

        {id: 4, user_id: 2, question_id: 1, answer:'d'},
        {id: 5, user_id: 2, question_id: 2, answer:'c'},
        {id: 6, user_id: 2, question_id: 3, answer:'d'},

        {id: 7, user_id: 3, question_id: 1, answer:'b'},
        {id: 8, user_id: 3, question_id: 2, answer:'a'},
     

        {id: 10, user_id: 4, question_id: 1, answer:'c'},
       
        {id: 12, user_id: 4, question_id: 3, answer:'c'},

        {id: 13, user_id: 5, question_id: 1, answer:'a'},
        {id: 14, user_id: 5, question_id: 2, answer:'d'},
        {id: 15, user_id: 5, question_id: 3, answer:'a'},
      ]).then(() => {
        return knex.raw(
          `SELECT setval('users_answers_questions_id_seq', (SELECT MAX(id) FROM users_answers_questions));`
        )
      })
    });
};
