const User = require('../models/User.js')

class UserService{
  static create(id, username, name, ){
    return new User(id, username, name, 'Sin bio')
  }
  static getInfo(user){
    return [user.id, user.username, user.name, user.bio]
  }
  static updateUserUsername(miUser, username){
    miUser.setUsername = username
  }
  static getAllUsernames(usuarios){
    const nombres = []
    usuarios.forEach(actual => nombres.push(actual.getUsername) )
    console.log(nombres)
    return nombres
  }
}

module.exports = UserService
