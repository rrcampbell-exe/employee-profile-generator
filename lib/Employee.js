class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `<p>Name: ${this.name}</p>`
    }

    getId() {
        return `<p>Employee ID: ${this.id}</p>`
    }

    getEmail() {
        return `<p>Email: <a href="mailto:${this.email}">${this.email}</a></p>`
    }

    getRole() {
        return "employee"
    }

}

module.exports = Employee