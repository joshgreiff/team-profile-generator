const Employee = require('../logic/Employee')

class Intern extends Employee {
    constructor(name, id, email, position, school){
        super(name, id, email, position)
        this.school = school
    }
}

module.exports = Intern