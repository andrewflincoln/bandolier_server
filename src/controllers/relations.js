
const relModel = require('../models/relations')


function getRel(req, res, next) {
  relModel.getRel(req.params.user_1, req.params.user_2)
  .then(
    response => {
      if (!response)
        return next({status: 400, message: `Could not find users.`})
      res.status(200).send(response)
  })
  .catch(next)
}

function getPlaylist(req, res, next) {
  relModel.getPlaylist(req.params.userId)
  .then(
    response => {
      if (!response)
        return next({status: 400, message: `Could not get playlist.`})
      res.status(200).send(response)
  })
  .catch(next)
}

function setRel(req, res, next) {
  relModel.setRel(req.body.user_1, req.body.user_2, req.body.status)
  .then(
    response => {
      if (!response)
        return next ({status: 400, message: `Could not alter relation.`})
      res.status(201).send(response)
    })
    .catch(next)
}
function removeRel(req, res, next) {
  relModel.removeRel(req.body.user_1, req.body.user_2)
  .then(
    response => {
      if (!response)
        return next ({status: 400, message: `Could not alter relation.`})
      res.status(204).send(response)
    })
    .catch(next)
}

module.exports = {
  getRel, setRel, getPlaylist, removeRel
}