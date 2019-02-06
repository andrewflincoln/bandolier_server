exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id');
    table.text('question_text').notNullable().defaultTo('');
    table.string('option_a').notNullable().defaultTo('');
    table.string('option_b').notNullable().defaultTo('');
    table.string('option_c').notNullable().defaultTo('');
    table.string('option_d').notNullable().defaultTo('');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions')
};
