const db = require('../database/models')

module.exports = {
   all: function (req, res) {
      db.Serie.findAll()
         .then(function (result) {
            return res.status(200).json(result)
         })
   },
   detail: function (req, res) {
      db.Serie.findByPk(req.params.id)
         .then(function (result) {
            return res.status(200).json(result)
         })
   },
   create: function (req, res) {
      db.Serie.create({
         title: req.body.title,
         release_date: req.body.release_date,
         end_date: req.body.end_date
      })
         .then(function (result) {
            return res.status(201).json(result);
         })
   }
}