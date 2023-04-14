export function getNumberOfEvenNumbersOfInterval(intervalStart: number, intervalEnd: number): number {

    let even: number = 0;

    for (let i = intervalStart; i <= intervalEnd; i++) {

        if (i % 2 == 0)
            even++
    }

    return even;
}