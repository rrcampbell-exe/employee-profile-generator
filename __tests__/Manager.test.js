const Manager = require("../lib/Manager");

test('creates a new manager object', () => {
    const manager = new Manager("William", 1, "yes", 123)
    
    // console.log(manager)
    
    // expect(testObj.name).toBe("William")
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('returns "Manager"', () => {
    const manager = new Manager('Peter Gibbons', 68, 'peter@initech.com', 100)
    
    expect(manager.getRole()).toBe("Manager");
})