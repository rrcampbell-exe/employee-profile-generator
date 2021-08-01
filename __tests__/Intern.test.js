const Intern = require("../lib/Intern");

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

test('returns "Intern"', () => {
    const intern = new Intern('Lawrence', 74, 'lawrence@initech.com', 'Hard Knocks')
    
    expect(intern.getRole()).toBe("Intern");
})