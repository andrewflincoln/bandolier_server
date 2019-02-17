const messagesModel = require('../models/messages')

function getMessages(req, res, next) {
  console.log('get messages')
  messagesModel.getMessages(req.params.user1, req.params.user2)
  .then(response => {
    if(!response) return next({status: 400, message: 'No messages found.'})
    res.send(response)
  })
  .catch(next)
}

function getConvos(req, res, next) {
  console.log('get convos')
  messagesModel.getConvos(req.params.userId) 
  .then(data => {
    return res.status(201).send(data)
  })
  .catch(next)
}

function postMessage(req, res, next) {
  console.log('post message')
  if(!req.body.sender_id || !req.body.receiver_id|| !req.body.body) {
    return next({status: 400, message: 'Message not valid.'})
  }
  messagesModel.postMessage(req.body.sender_id, req.body.receiver_id, req.body.body) 
  .then(data => {
    return res.status(201).send(data)
  })
  .catch(next)
}




module.exports = {
  getMessages, postMessage, getConvos
}