exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_relations', (table) => {
    table.increments('id');
    table.integer('user1_id').notNullable().defaultTo(0);
    table.integer('user2_id').notNullable().defaultTo(0);
    table.string('status').notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_answers_questions')
};
