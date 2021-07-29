const Intern = require("../lib/Intern");

jest.mock('../lib/Employee.js')

test('creates a new intern object', () => {
    const intern = new Intern ('Lawrence', 74, 'lawrence@initech.com', 'Hard Knocks')
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('returns school data as entered by user', () => {
    const intern = new Intern('Lawrence', 74, 'lawrence@initech.com', 'Hard Knocks')
    
    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('returns intern data as entered by user', () => {
    const intern = new Intern('Lawrence', 74, 'lawrence@initech.com', 'Hard Knocks')
    
    expect(intern.getRole()).toEqual(expect.any(Object));
})