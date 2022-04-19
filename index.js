const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('../team-profile-generator/generateMarkdown')
const Employee = require('../team-profile-generator/logic/Employee')
const Manager = require('../team-profile-generator/logic/Manager')
const Engineer = require('../team-profile-generator/logic/Engineer')
const Intern = require('../team-profile-generator/logic/Intern')
let employeeArr = []


const promptUser = function () {

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
            {
                name: 'office',
                type: 'input',
                message: "What is this team manager's office #??",
                when(answers) {
                    return answers.position === 'manager'
                }
            },
            {
                name: 'github',
                type: 'input',
                message: "What is this engineer's github username?",
                when(answers) {
                    return answers.position === 'engineer'
                }
            },
            {
                name: 'school',
                type: 'input',
                message: "What is this intern's school?",
                when(answers) {
                    return answers.position === 'intern'
                }
            },
            {
                name: 'again',
                type: 'confirm',
                message: "Would you like to add another team member?"
            },

        ]).then((data) => {
            

            if(data.again === true){
                if(data.position === 'manager'){
                    const employee1 = new Manager(data.name, data.id, data.email, data.position, data.office)
                    employeeArr.push(employee1)

                }
                else if(data.position === 'engineer'){
                    const employee1 = new Engineer(data.name, data.id, data.email, data.position, data.github)
                    employeeArr.push(employee1)

                }
                else if(data.position === 'intern'){
                    const employee1 = new Intern(data.name, data.id, data.email, data.position, data.school)
                    employeeArr.push(employee1)
                }
                
                promptUser()
 
            }
            else if(data.again === false){
                if(data.position === 'manager'){
                    const employee1 = new Manager(data.name, data.id, data.email, data.position, data.office)
                    employeeArr.push(employee1)
                }
                else if(data.position === 'engineer'){
                    const employee1 = new Engineer(data.name, data.id, data.email, data.position, data.github)
                    employeeArr.push(employee1)
                }
                else if(data.position === 'intern'){
                    const employee1 = new Intern(data.name, data.id, data.email, data.position, data.school)
                    employeeArr.push(employee1)
                }
                console.log(employeeArr)
                fs.writeFileSync('index.html', generateMarkdown(employeeArr))

            }

            
         })
          

}
promptUser()
    

