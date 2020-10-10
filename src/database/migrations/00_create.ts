import Knex from 'knex'

export async function up(knex:Knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('description').notNullable()
  })
}

export async function down(knex:Knex) {
  knex.schema.dropTable('tasks')
}