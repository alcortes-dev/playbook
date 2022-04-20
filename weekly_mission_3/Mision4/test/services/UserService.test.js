const UserService = require('../../app/services/UserService.js')

describe('Unit test of UserServece Class', () => {
   test('1) Crear objeto User usando la clase UserService', () => {
      const user = UserService.create(1, 'alcortes', 'alejandro cortes')

      expect(user.username).toBe('alcortes')
      expect(user.name).toBe('alejandro cortes')
      expect(user.id).toBe(1)
      expect(user.bio).not.toBeUndefined()
   })
   test('2) Add getInfo method', () => {
      const user = UserService.create(1, 'alcortes', 'alejandro cortes')
      const lista = UserService.getInfo(user)
      
      expect(lista.length).toBe(4)
      expect(lista[0]).toBe(1)
      expect(lista[1]).toBe("alcortes")
      expect(lista[2]).toBe("alejandro cortes")
      expect(lista[3]).toBe("Sin bio")

   })
   test('3) Add updateUserUsername', () => {
      const user = UserService.create(1, 'alcortes', 'alejandro cortes')
      UserService.updateUserUsername(user, 'alcortes.dev')

      expect(user.getUsername).toBe('alcortes.dev')
   })
   test('4) getAllUsernames', () => {
      const user1 = UserService.create(1, 'alcortes', 'alejandro cortes')
      const user2 = UserService.create(2, 'usuario2', 'usario 2')
      const user3 = UserService.create(3, 'usuario2', 'usuario 3')
      const user4 = UserService.create(4, 'usuario2', 'usuario 4')
      const lista = [user1, user2, user3, user4]

      const nombres = UserService.getAllUsernames(lista)
      console.log(nombres)
      expect(nombres).toContain(user1.getUsername)
      expect(nombres).toContain(user2.getUsername)
      expect(nombres).toContain(user3.getUsername)
      expect(nombres).toContain(user4.getUsername)

   })
})
