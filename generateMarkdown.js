const fs = require('fs')
let employeeArr = []



const generateMarkdown = function(data) {
    return `
    <h1>${data.name}</h1>
    `
}



module.exports = generateMarkdown