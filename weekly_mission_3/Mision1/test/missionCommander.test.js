const MC = require('../app/MissionCommander.js')

describe("UnitTests for MissionCommander Class", () => {
  test('1) Crea a mission commander object', () => {
    const mc = new MC('alejandro')
    expect(mc.name).toBe('alejandro')
  })
})
