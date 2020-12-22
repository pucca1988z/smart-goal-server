const consola = require('consola');
const Goals = require('../models/Goals')

let getAllGoal = (req, res, next) => {
  consola.info('here is get goals')
}

let createGoal = async (req, res, next) => {
  let newGoal = await new Goals(req.body).save() ;
  consola.success('GoalController: createGoal: newGoal: ',newGoal)
  res.status(201).json({
    success: true,
    newGoal
  })
}

module.exports = {
  getAllGoal,
  createGoal
}