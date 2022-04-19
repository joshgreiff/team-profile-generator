const fs = require('fs')



const generateEmployee = function(employeeArr) {
    return `
    ${employeeArr.map(({ name, id, email, position, office, github, school }) => {
        
        if(office){
        return`
        <h1>${name}</h1>
        <h2>${id}</h2>
        <h2>${email}</h2>
        <h2>${office}</h2>
        `
        }
        
        if(github){
            return`
            <h1>${name}</h1>
            <h2>${id}</h2>
            <h2>${email}</h2>
            <h2>${github}</h2>
            `
        }

        if(school){
            return`
            <h1>${name}</h1>
            <h2>${id}</h2>
            <h2>${email}</h2>
            <h2>${school}</h2>
            `
        }
        
    })
    }
    `
}

const generateMarkdown  = function(employeeArr) {
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
    ${generateEmployee(employeeArr)}
</body>
</html>
`
}

module.exports = generateMarkdown