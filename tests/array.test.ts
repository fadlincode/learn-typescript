import { getFirstArrayWithUpperCase } from "../src/array";

describe('Array', function() {
    it('should be array', function() {
        const name: string[] = ["aa","bb","cc"];
        expect(getFirstArrayWithUpperCase(name)).toBe("AA");
    });

    it('should support readonly array', function() {
        const name: ReadonlyArray<string> = ["aa","bb","cc"];
        // console.info(name[0]);

        // name[0] = "ddd";
    });

    it('should be tuple', function() {
        /**
         * tuple panjangnya sudah di tentukan dan tidak bisa di modifikasi
         * jadi untuk type nya di set : readonly
         */

        const name: readonly [string, string, number] = ["aa", "cc", 2];
        console.info(name[0]);
    });
});