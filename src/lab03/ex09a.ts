function checkIfNumberIsPalindrome(value: number): boolean {
    if (value != Math.trunc(value))
        throw new RangeError ('Value must be an integer number')

    if (value / 10 != Math.trunc(value/10))
        throw new RangeError('Value must be a number with at least two digits')

    let valueSplitIntoArray: string[] = value.toString().split("");
    let reversedValue: number = +valueSplitIntoArray.reverse().join("");
    let result = false
    
    if (value == reversedValue)
        result = true;

    return result;
}