export function stringVariable(value: String): String {
    return `String ${value}`;
}

export function numberVariable(value: Number): Number {
    return value;
}

export function booleanVariable(value: Boolean): Boolean {
    return value;
}

export function diffNumber(a: Number, b: Number): Boolean {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}