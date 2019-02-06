
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tracks', (table) => {
    table.increments('id');
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
    table.string('title').notNullable().defaultTo('');
    table.string('artist_name').notNullable().defaultTo('');
    table.string('user_contr').notNullable().defaultTo('');
    table.text('url').notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tracks')
};
