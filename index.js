const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('../team-profile-generator/generateMarkdown')
const Employee = require('../team-profile-generator/logic/Employee')
const Manager = require('../team-profile-generator/logic/Manager')
const Engineer = require('../team-profile-generator/logic/Engineer')
const Intern = require('../team-profile-generator/logic/Intern')
let employeeArr = []


const promptUser = function () {
    inquirer.prompt([
        {
            name: 'number',
            type: 'number',
            message: "How many employees are on your team?"
        },
    ]).then((number) => {
     

    inquirer    
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: "What is this team member's name?"
            },
            {
                name: 'id',
                type: 'input',
                message: "What is this team member's ID?"
            },
            {
                name: 'email',
                type: 'input',
                message: "What is this team member's email address?"
            },
            {
                name: 'position',
                type: 'list',
                message: "What is this team member's position?",
                choices: ['manager', 'engineer', 'intern']
            },

        ]).then((data) => {
            
            if(data.position === 'manager'){
                const employee1 = new Manager(data.name, data.id, data.email, data.position)
                employee1.getOffice()
               

            }
            if(data.position === 'engineer'){
                const employee1 = new Engineer(data.name, data.id, data.email, data.position)

            }
            if(data.position === 'intern'){
                const employee1 = new Intern(data.name, data.id, data.email, data.position)
                
            }

         })
        
    
})
}
promptUser()
    

// fs.writeFileSync('index.html', generateMarkdown(data))
