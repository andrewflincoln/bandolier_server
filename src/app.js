const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const io = require('socket.io')()


app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))
if(process.env.NODE_ENV !== 'production'){ require('dotenv').load() }

//Routes
app.use('/login', require ('./routes/auth'))
app.use('/users', require('./routes/users'))
app.use('/questions', require('./routes/questions'))
app.use('/relations', require ('./routes/relations'))
app.use('/messages', require ('./routes/messages'))

//Default Route
app.use(function(req, res, next) {
  next({status: 404, message: `Route not found.`}) 
})

//Error Handler
app.use(function(err, req, res, next) {
  const errorMessage = {}

  if (process.env.NODE_ENV !== 'production' && err.stack)
    errorMessage.stack = err.stack
  
  errorMessage.status = err.status || 500
  errorMessage.message = err.message || `Server error.` //change this

  res.status(errorMessage.status).send(errorMessage)

})




//Start Server
const port = process.env.PORT || 4000
app.listen(port, function() {
  console.log(`Bandolier is here on ${port} for your drivetime commute.`)
})


