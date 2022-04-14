const Engineer = require('../logic/Manager')

test('engineer object was created', () => {
    const engineer = new Engineer('Dave', '1', 'dave@poop.com', 'engineer')

    expect(engineer.name).toBe('Dave')
    expect(engineer.id).toBe('1')
    expect(engineer.email).toBe('dave@poop.com')
    expect(engineer.position).toBe('engineer')
})