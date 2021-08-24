const route = require('express').Router()
const { PokemonController, JobController } = require('../controllers')

route.get('/', (req, res) => {res.render('home')})

route.get('/pokemon', PokemonController.findAll)
route.post('/pokemon/add', PokemonController.create)
route.get('/pokemon/add', PokemonController.createForm)
route.get('/pokemon/:id/train', PokemonController.train)
route.get('/pokemon/:id/work', PokemonController.work)
route.get('/job', JobController.findAll)

module.exports = route