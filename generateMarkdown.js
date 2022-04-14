const fs = require('fs')
let employeeArr = []

const collectEmployee = function(employee){
    employeeArr.push(employee)
    console.log(employeeArr)
}

const generateMarkdown = function(data) {
    return `
    <h1>${data.name}</h1>
    `
}



module.exports = generateMarkdown