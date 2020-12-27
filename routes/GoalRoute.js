// const router = require('express').Router();
const router = require('express-promise-router')();
const consola = require('consola')

// controller 
const GoalController = require('../controller/GoalController')

router.route('/')
  .get(GoalController.getAllGoal)
  .post(GoalController.createNewGoal)

router.route('/:goalId')
  .get(GoalController.getGoalById)
  .put(GoalController.replaceGoal)
  .patch(GoalController.updateGoal)
  



module.exports = router;