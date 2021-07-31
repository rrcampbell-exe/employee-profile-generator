// GENERATE CARDS FOR UNIQUE ROLLS

// determine role of employee
function roleDetermine(data) {
    console.log(data)
    const cards={
        manager: [],
        engineer:[],
        intern:[]
    }
    for (let i = 0; i < data.length; i++) {
        const employeeSort = data[i];
        switch (employeeSort.getRole()) {
            case "Manager":
                cards.manager.push(generateManager(employeeSort))
                break;
            case "Engineer":
                console.log(employeeSort)
                cards.engineer.push(generateEngineer(employeeSort))
                break;
            case "Intern":
                console.log(employeeSort)
                cards.intern.push(generateIntern(employeeSort))
                break;
        }
    }
    return cards
}

// manager card
function generateManager(manager) {
    // roleDetermine(data)
    return `
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <div class="employee-position">
        <span class="oi oi-briefcase"></span>
        ${manager.getRole()}
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</div>`
}

// engineer cards
const generateEngineer = employee => `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.name}</h5>
          <div class="employee-position">
            <span class="oi oi-code"></span>
            ${employee.getRole()}
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">GitHub: <a href="mailto:${employee.gitHub}">${employee.gitHub}</a></li>
        </ul>
        </div>`

// intern cards
const generateIntern = employee => `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.name}</h5>
          <div class="employee-position">
            <span class="oi oi-code"></span>
            ${employee.getRole()}
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>
        </div>`

// FINAL LAYOUT OF HTML PAGE
function generatePage(data) {
    const cards = roleDetermine(data)
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data[0].name}'s Team</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' rel='stylesheet'
            integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x' crossorigin='anonymous'>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    
    <body>
        <h1>${data[0].name}'s Team</h1>
        <h2>Team Manager</h2>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    ${cards.manager}
                </div>
            </div>
        </div>
    
        <h2>Team Members</h2>
        ${cards.engineer.length ? `<h3>Engineers</h3>` : ""}
        <div class="container">
            <div class="row">
                <div class="col-4">
                    ${cards.engineer.join('')}
                </div>
            </div>
        </div>
        ${cards.intern.length ? `<h3>Interns</h3>` : ""}
        <div class="container">
            <div class="row">
                <div class="col-4">
                    ${cards.intern.join('')}
                </div>
            </div>
        </div>
    </body>
    
    </html>`
}

module.exports = generatePage;