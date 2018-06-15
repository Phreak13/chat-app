const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Anna',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Franz',
            room: 'Node Course'
        }]
    })

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Chris',
            room: 'The Office Fans'
        };
        let resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userList = users.removeUser('1');

        expect(userList).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        });
        expect(users.users.length).toBe(2);

    });

    it('should not remove a user', () => {
        let userList = users.removeUser('1235');

        expect(userList).toEqual(undefined);
        expect(users.users.length).toBe(3);
    });

    it('should find a user by id', () => {
        let userList = users.getUser('1');

        expect(userList).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        });
    });

    it('should not find a user by id', () => {
        let userList = users.getUser('12');

        expect(userList).toEqual(undefined);
    });

    it('should return names for node course', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Franz']);
    });

    it('should return names for react course', () => {
        let userList = users.getUserList('React Course');

        expect(userList).toEqual(['Anna']);
    });
})