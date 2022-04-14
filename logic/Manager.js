const Employee = require('../logic/Employee')
const inquirer = require('inquirer');
const collectEmployee = require('../collectEmployee')

class Manager extends Employee {
    constructor(name, id, email, position, office){
        super(name, id, email)
        this.position = position
        this.office = office
    }
    getOffice() {
        inquirer.prompt([
            {
                name: 'office',
                type: 'input',
                message: "What is this team manager's office #??"
            }
        ]).then((data) => {
            this.office = data.office
            collectEmployee(this)
        })
    }
}

module.exports = Manager