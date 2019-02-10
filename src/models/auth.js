const bcrypt = require('bcrypt')
const users = require('./users')

const login = (email, password) => {
  console.log('auth model')
let user
return users.checkEmail(email)
  .then(data => {
    console.log(data)
    if (!data) throw {status: 400, message: 'Bad Request'}
    user = data
    return bcrypt.compare(password, data.hashed_password)
  })
  .then(status => {
    if (!status) throw {status: 401, message: 'Unauthorized'}
    delete user.password
    return user
  })
}


module.exports = {login}