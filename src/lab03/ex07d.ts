export function getNumberOfOddNumbersOfInterval(intervalStart: number, intervalEnd: number): number {

    let odd: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {

        if (i % 2 != 0)
            odd++
    }

    return odd;
}