const consola = require('consola')


const router = require('express').Router();
const Users = require('../models/Users')

router.get('/', (req, res, next) => {
  Users.find({}).exec((err, data) => {
    if(err) consola.error(err)
    res.status(200).send(data)
  });
})

router.get('/:username', (req, res, next)=>{
  let username = req.params.username
  Users.find({username: username}).exec((err, data) => {
    if(err) consola.error(err)
    res.status(200).send(data)
  })
})

router.post('/', (req, res, next) => {

})

module.exports = router;