const UserService = require('../services/UserService.js')

class UserView{
  static createUser(payload){
    if(payload === null) return {error: 'payload no existe'}

    if(!payload.id || !payload.name || !payload.username){
      return {error: 'necesita tener un valor valido'}
    }
    const {id, name, username} = payload
    return UserService.create(id, username, name)
  }
}

module.exports = UserView
