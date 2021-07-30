const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool = function() {
        return `<p>School: ${this.school}</p>`
    }

    getRole = function() {
        return "intern"
    }
}

module.exports = Intern