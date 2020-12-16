// In order to run this test, your database must have a 
// model called user with at least name and password

const db = require('../database');

afterAll(async () => await db.close());
    
test('Create user', async () => {
    await db.create('user', { name: 'testName', password: '1234'});

    const user = await db.findOne('user', { name: 'testName'});

    expect(user.name).toEqual('testName');
    expect(user.getDataValue('password')).toEqual('1234');
});

test('Update user', async () => {
    await db.update('user', { name: 'testName' }, { password: '4321' });

    const user = await db.findOne('user', { name: 'testName'});

    expect(user.getDataValue('password')).toEqual('4321');
});

test('Delete user', async () => {
    await db.destroy('user', { name: 'testName' });

    const user = await db.findOne('user', { name: 'testName'});

    expect(user).toBe(null);
});

