const Engineer = require("../lib/Engineer");

test('creates a new engineer object', () => {
    const engineer = new Engineer ('Michael Bolton', 70, 'michael@initech.com', 'mike-bolton')
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
})

test('returns engineer GitHub as entered by user', () => {
    const engineer = new Engineer('Michael Bolton', 70, 'michael@initech.com', 'mike-bolton')
    
    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('returns "Engineer"', () => {
    const engineer = new Engineer('Michael Bolton', 70, 'michael@initech.com', 'mike-bolton')
    
    expect(engineer.getRole()).toBe("Engineer");
})