exports.up = (knex) => {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.string('pub_date')
    table.integer('donor_id').references('users.id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('books')
}
