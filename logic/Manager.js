const Employee = require('../logic/Employee')
const inquirer = require('inquirer');
const collectEmployee = require('../collectEmployee')

class Manager extends Employee {
    constructor(name, id, email, position, office){
        super(name, id, email)
        this.position = position
        this.office = office
    }
    
}

module.exports = Manager