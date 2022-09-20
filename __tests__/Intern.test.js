const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('initalization', () => {
        it('should return an object with a "name" "id" "email" and "school" property when called with the "new" keyword', () => {
            const obj = new Intern('nick',1,'user@aol.com', 'UCONN BootCamp');

            expect('nick').toEqual(expect.any(String));
            expect(1).toEqual(expect.any(Number));
            expect('user@aol.com').toEqual(expect.any(String));
            expect('UCONN BootCamp').toEqual(expect.any(String));
        });
    });

    describe('getSchool', () => {
        it('should return the intern school as a string', () => {
            const obj = new Intern('nick',1,'user@aol.com', 'UCONN BootCamp');

            expect(obj.getSchool()).toEqual('UCONN BootCamp');
            expect(obj.getSchool()).toEqual(expect.any(String));
        });
    });

    describe('getRole', () => {
        it('should return the intern role as "Intern" and as a string', () => {
            const obj = new Intern('nick',1,'user@aol.com', 'UCONN BootCamp');

            expect(obj.getRole()).toEqual('Intern');
            expect(obj.getRole()).toEqual(expect.any(String));
        });
    });
});