import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello name', function () {
        expect(sayHello('enma')).toBe('Hello enma');
    });
});
