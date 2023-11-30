import { booleanVariable, diffNumber, numberVariable, stringVariable } from "../src/variable-primitive";

describe('Variable Primitive', function() {
    it('should be string', function() {
        expect(stringVariable('aa')).toBe('String aa');
    });

    it('should be number', function() {
        expect(numberVariable(1)).toBe(1);
    });

    it('should be boolean', function() {
        expect(booleanVariable(true)).toBe(true);
    })

    it('a should be greater than b', function() {
        expect(diffNumber(12,10)).toBe(true);
    });

});