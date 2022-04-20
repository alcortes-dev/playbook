const User = require('../../app/models/User.js')

describe('Unit test for the User class', () => {
  test('1)Create an User object', () => {
      const user = new User(1, 'alcortes', 'alejandro cortes', 'Mi biografia')

      expect(user.id).toBe(1)
      expect(user.username).toBe('alcortes')
      expect(user.name).toBe('alejandro cortes')
      expect(user.bio).toBe('Mi biografia')
      expect(user.dateCreated).not.toBeUndefined()
      expect(user.lastUpdated).not.toBeUndefined()
  })
  test('Add getters', () =>{
      const user = new User(1, 'alcortes', 'alejandro cortes', 'Mi biografia')

      expect(user.getUsername).toBe('alcortes')
      expect(user.getBio).toBe('Mi biografia')
      expect(user.getDateCreated).not.toBeUndefined()
      expect(user.getLastUpdated).not.toBeUndefined()
  })
  test('Add setters', () =>{
      const user = new User(1, 'alcortes', 'alejandro cortes', 'Mi biografia')
      user.setUsername = "alcortes.dev"
      user.setBio = "Esta es mi bio."

      expect(user.getUsername).toBe('alcortes.dev')
      expect(user.getBio).toBe('Esta es mi bio.')
  })
})
