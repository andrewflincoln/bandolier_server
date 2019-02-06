exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id');
    table.integer('sender_id').notNullable().defaultTo(0).references('users.id').onDelete('CASCADE');
    table.integer('receiver_id').notNullable().defaultTo(0).references('users.id').onDelete('CASCADE');
    table.timestamps(true, true);
    table.text('body').notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
};
