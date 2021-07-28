const Employee = require('./Employee')

class Manager extends Employee {
    constructor() {
        super(name);

        this.officeNumber = officeNumber;
    }

    getRole = function() {
        // overridden to return 'Manager'
    }
}

module.exports = Manager