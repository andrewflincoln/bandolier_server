exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_answers_questions', (table) => {
    table.increments('id');
    table.integer('user_id').notNullable().defaultTo(0).references('users.id').onDelete('CASCADE');
    table.integer('question_id').notNullable().defaultTo(0).references('questions.id').onDelete('CASCADE');
    table.string('answer').notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_answers_questions')
};
