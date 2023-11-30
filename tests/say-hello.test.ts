import { sayHello } from "../src/say-hello";

describe('sayHello', function(): void {
    it('should return hello name', function() {
        expect(sayHello('enma')).toBe('Hello enma');
    })
});