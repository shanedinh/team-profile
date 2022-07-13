const Engineer = require('../lib/Engineer.js');

test('create an engineer object', () => {
    const engineer = new Engineer('Joe', 112, 'joeguy@team.com', 'joegit');

    expect(engineer.name).toBe('Joe');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('joeguy@team.com');
    expect(engineer.github).toBe('joegit');
});

test('get employee role', () => {
    const engineer = new Engineer('Joe', 112, 'joeguy@team.com');

    expect(engineer.getRole()).toEqual('Engineer');
})
