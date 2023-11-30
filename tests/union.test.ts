import { getVariableType } from "../src/union";

describe('Union Test', function(){
    it('should get variable type of number', function() {
        expect(getVariableType(100)).toBe(102);
    });

    it('should get variable type of string', function() {
        expect(getVariableType("i can")).toBe("I CAN");
    });

    it('should get variable type of boolean', function() {
        expect(getVariableType(true)).toBe(false);
    });
});