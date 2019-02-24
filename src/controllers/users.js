const userModel = require('../models/users')

function getAll(req, res, next) {
  userModel.getAll()
  .then((response) => {
    if(!response) return next({status: 400, message: 'Users not found'})
    res.send(response)
  })
  .catch(next)
}

function getOne(req, res, next) {
  console.log('get one user')
  userModel.getOne(req.params.userId, req.params.gettingId)
  .then(response => {
    if(!response) return next({status: 400, message: 'User not found'})

    res.send(response)
  })
  .catch(next)
}

function getNext(req, res, next) {
  console.log('get next C')
  userModel.getNext(req.params.userId)
  .then(response => {
    if(!response) return next({status: 400, message: 'Could not get user.'})

    res.send(response) ///may have to adjust here
  })
  .catch(next)
}

function createUser(req, res, next) {
  console.log('create user')
  if(!req.body.username || !req.body.email || !req.body.password|| !req.body.deal) {
    return next({status: 400, message: 'Could not create user. Maybe you left something out?'})
  }
  userModel.createUser(req.body.username, req.body.email, req.body.password, req.body.deal, req.body.genre_1, req.body.genre_2, req.body.genre_3, req.body.bio, req.body.heroes, req.body.influences, req.body.instr_1, req.body.instr_2, req.body.instr_3, req.body.looking_1, req.body.looking_2, req.body.looking_3) 
  .then(data => {
    return res.status(201).send(data)
  })
  .catch(next)
}

function updateUser(req, res, next) {
  console.log('update user')
  userModel.updateUser(req.body.id, req.body.username, req.body.email, req.body.img_url, req.body.deal, req.body.genre_1, req.body.genre_2, req.body.genre_3, req.body.bio, req.body.heroes, req.body.influences, req.body.instr_1, req.body.instr_2, req.body.instr_3)
  .then(data => {
    return res.status(201).send(data)
  })
  .catch(next)
}

function searchUsers(req, res, next) {
  userModel.searchUsers(req.body.userId, req.body.genre_1, req.body.instr_1, req.body.heroes, req.body.influences)
    // req.body.heroes, req.params.influences)
  .then(data => {
    return res.status(200).send(data)
  })
  .catch(next)
}


module.exports = {
  getOne, getAll, createUser, updateUser, searchUsers, getNext
}