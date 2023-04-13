export function getNumberOfWaysOfObtainingValue(value: number): number {
    if (value < 1 || value > 20 || !Number.isInteger(value))
        throw new RangeError('Value must be an integer between 1 and 20');

    let count: number = 0;

    for (let i = 0; i <= 10; i++) {
        for (let j = 10; j >= i; j--)
            if (i + j == value)
                count++
    }

    return count;
}