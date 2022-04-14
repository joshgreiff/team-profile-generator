const Employee = require('../logic/Employee')

class Intern extends Employee {
    constructor(name, id, email, position){
        super(name, id, email, position)
    }
}

module.exports = Intern