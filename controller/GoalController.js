const consola = require('consola');
const Goals = require('../models/Goals')

module.exports = {
  getAllGoal: async (req, res, next) => {
    const goals = await Goals.find({});
    consola.success('GoalController: getAllGoal: goals: ', goals);
    res.status(200).json({
      success: true,
      result: goals
    })
  },
  createNewGoal: async (req, res, next) => {
    let newGoal = await new Goals(req.body).save() ;
    consola.success('GoalController: createNewGoal: newGoal: ',newGoal)
    res.status(201).json({
      success: true,
      result: newGoal
    })
  },
  getGoalById: async (req, res, next) => {
    const goal = await Goals.findById(req.params.goalId);
    consola.success('GoalController: getGoalById: goal: ', goal)
    res.status(200).json({
      success: true,
      result: goal
    })
  },
  replaceGoal: async (req, res, next) => {
    let { goalId } = req.params
    let newGoal = req.body ; 
    const result = await Goals.findOneAndReplace(goalId, newGoal, {
      new: true
    })
    res.status(200).json({
      success: true, 
      result
    })
  },
  updateGoal: async (req, res, next) => {
    let { goalId } = req.params
    let newGoal = req.body ; 
    const result = await Goals.findOneAndUpdate(goalId, newGoal, {
      new: true
    })
    res.status(200).json({
      success: true, 
      result
    })
  }
}