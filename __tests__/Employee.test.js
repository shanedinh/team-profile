const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Shane', 123, 'shane.dinh5@gmail.com');

    expect(employee.name).toBe('Shane');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('shane.dinh5@gmail.com');
});

test('get employee role', () => {
    const employee = new Employee('Shane', 123, 'shane.dinh5@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
})