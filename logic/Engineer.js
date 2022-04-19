const Employee = require('../logic/Employee')

class Engineer extends Employee {
    constructor(name, id, email, position, github){
        super(name, id, email, position)
        this.github = github 
    }
}

module.exports = Engineer