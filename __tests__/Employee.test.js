const Employee = require("../lib/Employee");

test('creates a new employee object', () => {
    const employee = new Employee('Peter Gibbons', 68, 'peter@initech.com')
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('creates employee name in HTML string', () => {
    const employee = new Employee('Peter Gibbons')

    expect(employee.getName()).toEqual(expect.any(String))
})

test('creates employee ID in HTML string', () => {
    const employee = new Employee('Peter Gibbons', 68, 'peter@initech.com')

    expect(employee.getId()).toEqual(expect.any(String))
})

test('creates employee email address in HTML string', () => {
    const employee = new Employee('Peter Gibbons', 68, 'peter@initech.com')
    
    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('returns employee data as entered by user', () => {
    const employee = new Employee('Peter Gibbons', 68, 'peter@initech.com')
    
    expect(employee.getRole()).toEqual(expect.any(Object));
})