const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }

    getGithub = function() {
        return `<p>GitHub: <a href="https://www.github.com/${this.gitHub}/" target="_blank">${this.gitHub}</a></p>`

    }

    getRole = function() {
        return this
    }
}

module.exports = Engineer