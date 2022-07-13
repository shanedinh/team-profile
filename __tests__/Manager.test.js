const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const manager = new Manager('Bob', 321, 'bobman@team.com');

    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('bobman@team.com');
});

test('get employee role', () => {
    const manager = new Manager('Bob', 321, 'bobman@team');

    expect(manager.getRole()).toEqual('Manager');
})