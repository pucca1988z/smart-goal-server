const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
  specificGoalName:{
    type:'string'
  },
  measurableGoal:{
    type:'string'
  },
  achievableGoal:{
    type:'string'
  },
  relevantGoal:{
    type:'string'
  },
  timeBound:{
    type:'string'
  },
  creationDate:{
    type:Date,
    default: Date.now
  },
  userId:{
    type:'string'
  },
})

module.exports = mongoose.model('Goals', GoalSchema)