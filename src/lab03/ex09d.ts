function getBiggestPalindromOfInterval(intervalStart: number, intervalEnd: number): number {
    if (intervalStart > -11 && intervalEnd < 11)
        throw new RangeError('Interval must contain at least one palindrome')

    let biggestPalindrome: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {
        let reversedNumber: number = +(i.toString().split("").reverse().join(""))

        if (i == reversedNumber) {
            biggestPalindrome = i;
        }
    }

    return biggestPalindrome;
}