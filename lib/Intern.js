const Employee = require('./Employee')

class Intern extends Employee {
    constructor() {
        super(name);

        this.school = school;
    }

    getSchool = function() {
        
    }

    getRole = function() {
        // overridden to return 'Intern'
    }
}

module.exports = Intern