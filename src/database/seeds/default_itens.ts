import Knex from 'knex'

export async function seed(knex:Knex) {
  await knex('tasks').insert([
    {title: 'tarefa diaria', description: 'varrer a casa'},
    {title: 'dever de casa', description: 'fazer o deve de casa relacionado a materia de matemática'},
    {title: 'peajudar a avó', description: 'ajudar a avó a ir no médico'},
    {title: 'dormir', description: 'não dormir tarde'},
  ])
  
}