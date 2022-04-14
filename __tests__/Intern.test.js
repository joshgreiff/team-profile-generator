const Intern = require('../logic/Intern')

test('manager object was created', () => {
    const intern = new Intern('Dave', '1', 'dave@poop.com', 'engineer')

    expect(intern.name).toBe('Dave')
    expect(intern.id).toBe('1')
    expect(intern.email).toBe('dave@poop.com')
    expect(intern.position).toBe('engineer')
})