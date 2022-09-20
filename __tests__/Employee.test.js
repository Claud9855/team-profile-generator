const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return an object containing a "name" "id" and "email" property when called with the "new" keyword', () => {
            const obj = new Employee('sam', 1, 'user@gmail.com');

            expect('sam').toEqual(expect.any(String));
            expect(1).toEqual(expect.any(Number));
            expect("user@gmail.com").toEqual(expect.any(String));
        });
    });

    describe('getName', () => {
        it('should return the employee name as a string', () => {
            const obj = new Employee('sam', 1, 'user@gmail.com');

            expect(obj.getName()).toEqual('sam');
            expect(obj.getName()).toEqual(expect.any(String));
        });
    });

    describe('getID', () => {
        it('should return the employee id as a number', () => {
            const obj = new Employee('sam', 1, 'user@gmail.com');

            expect(obj.getID()).toEqual(1);
            expect(obj.getID()).toEqual(expect.any(Number));
        });
    });

    describe('getEmail', () => {
        it('should return the employee email as a string', () => {
            const obj = new Employee('sam', 1, 'user@gmail.com');

            expect(obj.getEmail()).toEqual('user@gmail.com');
            expect(obj.getEmail()).toEqual(expect.any(String));
        });
    });

    describe('getRole', () => {
        it('should return the employee role as "employee" and as a string', () => {
            const obj = new Employee('sam', 1, 'user@gmail.com');

            expect(obj.getRole()).toEqual('Employee');
            expect(obj.getRole()).toEqual(expect.any(String));
        });
    });
});