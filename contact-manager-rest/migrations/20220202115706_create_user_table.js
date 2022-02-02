/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    knex.schema.createTable('users', (table) => {
        table.increments('id').primary(),
        table.string('name'),
        table.integer('phone_number'),
        table.string('image_url')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("users")
};
