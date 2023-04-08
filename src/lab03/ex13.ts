function getNumberOfWaysOfObtainingValue(value: number): number {
    if (value < 1 && value > 20)
        throw new RangeError('Value must be between 1 and 20');

    let count: number = 0;

    for (let i = 0, j = value; i <= j; i++, j--) {
        if (i + j == value && i <= 10 && j <= 10)
            count++
    }

    return count;
}