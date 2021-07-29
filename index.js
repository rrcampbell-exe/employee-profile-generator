const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require("./lib/Manager")

let managerObj = {}
let engineerObj = {}
let internObj = {}

const employees = [];

// Employee class questions
const managerQuestionData = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide this team manager's first and last name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("You must enter a name for this manager.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide this manager's employee ID number.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("You must enter an employee ID for this manager.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide this manager's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("You must enter this manager's email address.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is this manager's office number?",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log("You must provide an office number.")
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addAnother',
        message: "Would you like to add a member to this manager's team?",
        when: ({ officeNumber }) => {
            if (officeNumber) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'addTeamMember',
        message: "Which role would you like to add to this manager's team?",
        choices: ['Engineer', 'Intern'],
        when: ({addAnother}) => {
            if (addAnother) {
                return true;
            } else {
                return false;
            }
        }
    },
]

// Engineer class questions
const engineerQuestionData = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide this engineer's first and last name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("You must enter a name for this engineer.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide this engineer's employee ID number.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("You must enter an employee ID for this engineer.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide this engineer's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("You must enter this engineer's email address.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What is this engineer's GitHub username?",
        validate: gitHub => {
            if (gitHub) {
                return true;
            } else {
                console.log("You must provide a GitHub username for this engineer.")
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addAnother',
        message: "Would you like to add another member to " + managerObj.name + "'s team?",
        when: ({ gitHub }) => {
            if (gitHub) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'addTeamMember',
        message: "Which role would you like to add to " + managerObj.name + "'s team?",
        choices: ['Engineer', 'Intern'],
        when: ({addAnother}) => {
            if (addAnother) {
                return true;
            } else {
                return false;
            }
        }
    },
]

// Intern class questions
const internQuestionData = [
    {
        type: 'input',
        name: 'name',
        message: "Please provide this intern's first and last name.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("You must enter a name for this intern.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please provide this intern's ID number.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("You must enter an employee ID for this intern.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please provide this intern's email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("You must enter this intern's email address.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Which school does this intern attend?",
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("You must provide a school name for this intern.")
                return false;
            }
        }
    },

    // add another team member or writeFile
]

// function for engineer questions
function engineerQuestions() {
    return inquirer
    .prompt(engineerQuestionData)
    .then(response => {
        engineerObj = response;
        console.log(managerObj);
        console.log(engineerObj);

        if (engineerObj.addAnother) {
            if (engineerObj.addTeamMember.includes('Engineer')) {
                engineerQuestions();
                return
            } else {
                internQuestions();
                return;
            }
        } else {
            // writeFile
            console.log("A page has been generated for " + managerObj.name + "'s team. Run index.html from the /dist folder to see the result.")
        }
    })
}

// function for intern questions
function internQuestions() {
    return inquirer
    .prompt(internQuestionData)
    .then(response => {
        internObj = response;
        console.log(internObj);

        if (internObj.addAnother) {
            if (internObj.addTeamMember.includes('Engineer')) {
                engineerQuestions();
                return
            } else {
                internQuestions();
                return;
            }
        } else {
            // writeFile
            console.log("A page has been generated for " + managerObj.name + "'s team. Run index.html from the /dist folder to see the result.")
        }
    })
}

// initialization function for Manager class questions
function init() {
    return inquirer
    .prompt(managerQuestionData)
    .then(response => {
        managerObj = response
        // console.log(managerObj);
        const newMgr = new Manager(response.name, response.id,response.email, response.officeNumber);
        // console.log(newMgr)
        // console.log(newMgr.getRole())
        employees.push(newMgr);

        if (managerObj.addAnother) {
            if (managerObj.addTeamMember.includes('Engineer')) {
                engineerQuestions();
                return
            } else {
                internQuestions();
                return;
            }
        } else {
            // writeFile
            console.log("A page has been generated for " + managerObj.name + "'s team. Run index.html from the /dist folder to see the result.")
        }
    })
}

// run function
init();