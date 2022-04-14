const Manager = require('../logic/Manager')

test('manager object was created', () => {
    const manager = new Manager('Dave', '1', 'dave@poop.com', 'engineer')

    expect(manager.name).toBe('Dave')
    expect(manager.id).toBe('1')
    expect(manager.email).toBe('dave@poop.com')
    expect(manager.position).toBe('engineer')
})