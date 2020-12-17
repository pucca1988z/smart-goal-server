const router = require('express').Router();
const consola = require('consola')
const Goals = require('../models/Goals')

router.get('/:id', (req, res, next) => {
  let goalId = req.params.id;
  consola.info(goalId)
  Goals.find({_id:goalId}).exec((err, data) => {
    if(err) consola.error(err);
    res.status(200).send(data)
  })
})

router.get('/', (req, res, next) => {
  Goals.find().exec((err, data) => {
    if(err) consola.error(err);
    res.status(200).send(data)
  })
})

router.post('/', (req, res, next) => {

})

module.exports = router;