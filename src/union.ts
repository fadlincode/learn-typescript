/**
 * Untuk union kita bisa set variabel dengan banyak type
 * yang di inginkan dengan pemisahan menggunakan tanda "|"
 */

export function getVariableType(value: number | string | boolean) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if(typeof value == 'number') {
        return value + 2;
    } else {
        return !value;
    }
}