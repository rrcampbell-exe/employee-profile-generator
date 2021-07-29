class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = function() {
        return `<p>Name: ${this.name}</p>`
    }

    getId = function() {
        return `<p>Employee ID: ${this.id}</p>`
    }

    getEmail = function() {
        return `<p>Email: <a href="mailto:${this.email}">${this.email}</a></p>`
    }

    getRole = function() {
        // returns employee
        return this
    }

}

module.exports = Employee