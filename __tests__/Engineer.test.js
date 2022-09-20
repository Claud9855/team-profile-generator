const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('initialization', () => {
        it('should return an object with a "name" "id" "email" and "github" property when called with the "new" keyword', () => {
            const obj = new Engineer('jack', 1, 'user@yahoo.com', 'jack505098');

            expect('jack').toEqual(expect.any(String));
            expect(1).toEqual(expect.any(Number));
            expect('user@yahoo.com').toEqual(expect.any(String));
            expect('jack505098').toEqual(expect.any(String));
        });
    });

    describe('getGithub', () => {
        it('should return the employee github username as a string', () => {
            const obj = new Engineer('jack', 1, 'user@yahoo.com', 'jack505098');

            expect(obj.getGithub()).toEqual('jack505098');
            expect(obj.getGithub()).toEqual(expect.any(String));
        });
    });

    describe('getRole', () => {
        it('should return the employee role as "Engineer" and as a string', () => {
            const obj = new Engineer('jack', 1, 'user@yahoo.com', 'jack505098');

            expect(obj.getRole()).toEqual("Engineer");
            expect(obj.getRole()).toEqual(expect.any(String));
        });
    });
});