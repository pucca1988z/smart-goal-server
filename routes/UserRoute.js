const consola = require('consola')
// const router = require('express').Router();
const router = require('express-promise-router')();

const UserController = require('../controller/UserController')

router.route('/')
  .get(UserController.getAllUser)
  .post(UserController.createUser)
  .delete()
  .put();

router.route('/:id')
  .get(UserController.getUserById)
  .delete(UserController.delUserById)
  .put(UserController.replaceUserById);

module.exports = router;