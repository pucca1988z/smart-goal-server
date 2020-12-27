const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
  specificGoalName:{ type:'string' },
  measurableGoal:{ type:'string' },
  achievableGoal:{ type:'string' },
  relevantGoal:{ type:'string' },
//   timeBound:{ type:'string' },
  timeBound:[{
    type:mongoose.Schema.Types.Date,
  }],
  creationDate:{
    type:Date, default: Date.now
  },
  userId:{ type: mongoose.Schema.Types.ObjectId},
})

module.exports = mongoose.model('Goals', GoalSchema)