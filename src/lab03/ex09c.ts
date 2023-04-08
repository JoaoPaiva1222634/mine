function getFirstPalindromOfInterval(intervalStart: number, intervalEnd: number): number {
    if (intervalStart > -11 && intervalEnd < 11)
        throw new RangeError('Interval must contain at least one palindrome')

    let firstPalindrome: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        let reversedNumber: number = +(i.toString().split("").reverse().join(""))

        if (i == reversedNumber && i.toString().length > 1) {
            firstPalindrome = i;
            break;
        }
    }

    return firstPalindrome;
}