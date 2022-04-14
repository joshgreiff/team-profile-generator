const Employee = require('../logic/Employee')

class Engineer extends Employee {
    constructor(name, id, email, position){
        super(name, id, email, position)
    }
}

module.exports = Engineer