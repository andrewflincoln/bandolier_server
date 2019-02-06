const userModel = require('../models/users')

function getAll(req, res, next) {
  userModel.getAll()
  .then((response) => {
    // if(!response.data) return next({status: 400, message: 'Users not found'})
    res.send(response)
  })
  .catch(next)
}

function getOne(req, res, next) {
  userModel.getOne(req.params.userId)
  .then(response => {
    // if(!response.data) return next({status: 400, message: 'User not found'})

    res.send(response)
  })
  .catch(next)
}


module.exports = {
  getOne, getAll
}