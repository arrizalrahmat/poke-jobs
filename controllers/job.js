const { Job } = require('../models')

class JobController {
  static findAll(req, res) {
    Job.findAll({
      order: [
        ['id', 'asc']
      ]
    })
      .then(data => {
        res.render('job', { jobs: data })
      })
      .catch(err => {
        res.json(err)
      })
  }
}

module.exports = JobController