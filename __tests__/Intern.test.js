const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('Roman', 107, 'romanint@team.com', 'Bemidji State University');

    expect(intern.name).toBe('Roman');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('romanint@team.com');
    expect(intern.school).toBe('Bemidji State University');
})

test('get intern school', () => {
    const intern = new Intern('Roman', 107, 'romanint@team', 'Bemidji State University');

    expect(intern.school).toBe('Bemidji State University');
})