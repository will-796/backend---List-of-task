import express from 'express'
import knex from './database/connection'

const routes = express.Router()

routes.get('/pepeu', async (request, response) => {
  const tasks = await knex('tasks').select('*')

  return response.json(tasks)
})

routes.post('/cadastro', (request, response) => {
  const {title,description} = request.body

  knex('tasks').insert({title, description})
  .then(()=>{
    return response.json({success: true})
  })
  .catch(()=>{
   return response.send("erro")
  })
})

routes.get('/pepeu/:id', async (request, response) =>{
  const {id} =request.params 

  try {
    const tasks = await knex('tasks').select('*').where('id', id)
    return response.json(tasks[0])

  } catch (error) {
    return response.status(400).send(error)
  }
})

routes.put('/pepeu/:id', async (request, response) => {
  const {title, description} = request.body
  const {id} =request.params

  try {
    await knex('tasks').where('id', id).update({title, description})
    return response.send('atualizado')
  } catch (error) {
    return response.send('ocorreu um erro ao deletar o seu arquivo, tente novamente')
  }
})

routes.delete('/pepeu/:id', async (request, response) => {
  const {id}=request.params

  try {
    await knex('tasks').where('id', id).del()
    return response.send('deletado')
  } catch (error) {
    return response.send('ocorreu um erro ao deletar o seu arquivo, tente novamente')
  }
})

export default routes



