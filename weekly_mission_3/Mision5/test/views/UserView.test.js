const UserView = require('../../app/views/UserView.js')


describe('Tests for UserView', () => {
  
  test('Return an error object when try to create a new user with a null payload', () => {
    const payload = null
    const result = UserView.createUser(payload)

    expect(result.error).toMatch(/payload no existe/)
  })

  test('Return a erro object when try to create a new user with a payload with invalid properties', () => {
    const payload = {username: null, name: 'alcortes', id: 1}
    const resultado = UserView.createUser(payload)

    expect(resultado.error).toMatch(/necesita tener un valor valido/)
  })

  test('Return a erro object when try to create a new user with a payload with missing properties', () => {
    const payload = {username: 'alcortes' }
    const resultado = UserView.createUser(payload)

    expect(resultado.error).toMatch(/necesita tener un valor valido/)
  })

  test('Create a user by a given valid payload', () => {
    const payload = {username: 'alcortes', name: 'alejandro cortes', id: 1}
    const resultado = UserView.createUser(payload)
     
    expect(resultado.name).toBe('alejandro cortes')
    expect(resultado.username).toBe('alcortes')
    expect(resultado.id).toBe(1)
  })
})
