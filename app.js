const consola = require('consola');
const app = require('express')();
const mongan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config();
const hemlet = require('helmet')
const mongoose = require('mongoose'); 
 

// connect db
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  consola.info(`connected to db: ${process.env.DB_URI}`)
}).catch( err => consola.error('xx'))


// middleware
app.use(mongan('tiny'))
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser());

//route
const UserRoute = require('./routes/UserRoute')
const GoalRoute = require('./routes/GoalRoute')
app.use('/users', UserRoute)
app.use('/goals', GoalRoute)  





const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
  consola.info(`server is running on port: ${PORT}`)
})