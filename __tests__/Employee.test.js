const Employee = require('../logic/Employee')

test('Employee object was created', () => {
    const employee = new Employee('Dave', '1', 'dave@poop.com')

    expect(employee.name).toBe('Dave')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('dave@poop.com')
})

