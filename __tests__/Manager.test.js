const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('initalization', () => {
        it('should return an object with a "name" "id" "email" and "officeNumber" property when called with the "new" keyword', () => {
            const obj = new Manager('nick',1,'user@aol.com', 12345);

            expect('nick').toEqual(expect.any(String));
            expect(1).toEqual(expect.any(Number));
            expect('user@aol.com').toEqual(expect.any(String));
            expect(12345).toEqual(expect.any(Number));
        });
    });

    describe('getOfficeNumber', () => {
        it('should return the manager office number as a number', () => {
            const obj = new Manager('nick',1,'user@aol.com', 12345);

            expect(obj.getOfficeNumber()).toEqual(12345);
            expect(obj.getOfficeNumber()).toEqual(expect.any(Number));
        });
    });

    describe('getRole', () => {
        it('should return the manager role as "Manager" and as a string', () => {
            const obj = new Manager('nick',1,'user@aol.com', 12345);

            expect(obj.getRole()).toEqual('Manager');
            expect(obj.getRole()).toEqual(expect.any(String));
        });
    });
});