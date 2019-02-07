
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('username').notNullable().defaultTo('');
    table.string('email').notNullable().defaultTo('');
    table.string('hashed_password').notNullable().defaultTo('');
    table.text('deal').notNullable().defaultTo('');
    table.string('genre_1').notNullable().defaultTo('');
    table.string('genre_2').notNullable().defaultTo('');
    table.string('genre_3').notNullable().defaultTo('');
    table.text('bio').notNullable().defaultTo('');
    table.text('heroes').notNullable().defaultTo('');
    table.text('influences').notNullable().defaultTo('');
    table.string('instr_1').notNullable().defaultTo('');
    table.string('instr_2').notNullable().defaultTo('');
    table.string('instr_3').notNullable().defaultTo('');
    table.string('looking_1').notNullable().defaultTo('');
    table.string('looking_2').notNullable().defaultTo('');
    table.string('looking_3').notNullable().defaultTo('');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
