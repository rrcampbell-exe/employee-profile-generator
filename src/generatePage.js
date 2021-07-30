// GENERATE CARDS FOR UNIQUE ROLLS

// manager card
function generateManager(data) {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data[0].name}</h5>
      <div class="employee-position">
        <span class="oi oi-briefcase"></span>
        ${data[0].getRole()}
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data[0].id}</li>
      <li class="list-group-item">Email: <a href="mailto:${data[0].email}">${data[0].email}</a></li>
      <li class="list-group-item">Office Number: ${data[0].officeNumber}</li>
    </ul>
</div>`
}

// engineer cards
function generateEngineer(data) {
    if (data.getRole() = "Engineer") {
        for (let i = 0; i < data.getRole().length; i++) {
            return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <div class="employee-position">
            <span class="oi oi-code"></span>
            ${data[i].getRole()}
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data[i].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${data[i].email}">${data[i].email}</a></li>
          <li class="list-group-item">GitHub: <a href="mailto:${data[i].gitHub}">${data[i].gitHub}</a></li>
        </ul>
        </div>`
        }
    } 
    return ''
}

// intern cards
function generateIntern(data) {
    console.log(data)
}

// FINAL LAYOUT OF HTML PAGE
function generatePage(data) {
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
                    ${generateManager(data)}
                </div>
            </div>
        </div>
    
        <h2>Team Members</h2>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    ${generateEngineer(data)}
                </div>
            </div>
        </div>
    
        <div class="container">
            <div class="row">
                <div class="col-12">
                    ${generateIntern(data)}
                </div>
            </div>
        </div>
    </body>
    
    </html>`
}

module.exports = generatePage;