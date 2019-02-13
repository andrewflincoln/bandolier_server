exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id');
    table.text('question_text').notNullable().defaultTo('');
    table.string('option_1').notNullable().defaultTo('');
    table.string('option_2').notNullable().defaultTo('');
    table.string('option_3').notNullable().defaultTo('');
    table.string('option_4').notNullable().defaultTo('');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questions')
};
