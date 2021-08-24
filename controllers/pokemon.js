const { Pokemon, Job } = require('../models')

class PokemonController {
  static create(req, res) {
    let { name, type, ball, jobId } = req.body
    let errors = []
    for(let field in req.body) {
      if(!req.body[field]) {
        let err = field === 'jobId' ? 'job' : field
        errors.push(err)
      }
    }
    if(errors.length) {
      let msg = ''
      if(errors.length > 1) {
        for(let i = 0; i < errors.length; i++) {
          if(i === errors.length - 1) {
            msg += 'dan ' + errors[i]
          } else if(i === errors.length - 2) {
            msg += errors[i] + ' '
          } else {
            msg += errors[i] + ', '
          }
        }
      } else {
        msg += errors[0]
      }
      msg += ' tidak boleh kosong'
      res.redirect('/pokemon/add?err=' + msg)
    } else {
      Pokemon.create({ name, type, ball, jobId: Number(jobId) })
        .then(data => {
          res.redirect('/pokemon')
        })
        .catch(err => {
          console.log({ msg: err.message })
          res.json(err)
        })
    }
  }

  static createForm(req, res) {
    let msg = req.query.err || null
    Job.findAll()
      .then(data => {
        res.render('pokeform', { jobs: data, err: msg })
      })
      .catch(err => {
        res.json(err)
      })
  }

  static findAll(req, res) {
    Pokemon.findAll({
      include: Job,
      order: [
        ['id', 'asc']
      ]
    })
      .then(data => {
        res.render('pokemon', { pokes: data, err: null })
      })
      .catch(err => {
        console.log({ msg: err.message })
        res.json(err)
      })
  }

  static train(req, res) {
    Pokemon.findByPk(Number(req.params.id))
      .then(data => {
        return Pokemon.update({
          level: data.level + Number(req.query.q)
        }, { where: { id: Number(req.params.id) }})
      })
      .then(data => {
        res.redirect('/pokemon')
      })
      .catch(err => {
        res.json(err)
      })
  }

  static work(req, res) {
    let poke = {}
    Pokemon.findByPk(req.params.id)
      .then(data => {
        poke = data
        return Job.findByPk(data.jobId)
      })
      .then(job => {
        let penambahan = (poke.type == job.type ? (job.rate * 1.5) : job.rate)
        return Promise.all([
          Job.update({ income: job.income + penambahan }, { where: { id: poke.jobId }}),
          Pokemon.update({ income: poke.income + penambahan }, { where: { id: req.params.id }})
        ])
      })
      .then(data => {
        res.redirect('/pokemon')
      })
      .catch(err => {
        res.json(err)
      })
  }
}

module.exports = PokemonController