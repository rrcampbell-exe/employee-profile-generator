const Employee = require('./Employee')

class Engineer extends Employee {
    constructor() {
        super(name);

        this.gitHub = gitHub; // gitHub username
    }

    getGithub = function() {
        
    }

    getRole = function() {
        // overridden to return 'Engineer'
    }
}

module.exports = Engineer