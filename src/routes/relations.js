const express = require('express')
const router = express.Router({mergeParams: true})
const relController = require('../controllers/relations')
// const authController = require('../controllers/auth')

router.get('/:user_1/:user_2', relController.getRel)


router.post('/', relController.setRel)


module.exports = router
