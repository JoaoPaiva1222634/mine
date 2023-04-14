export function getSumOfMultiplesOfNumberInInterval(numberA: number, numberB: number, numberC: number): number {

    let sumOfMultiplesOfNumberInInterval: number = 0;
    let intervalStart: number = numberA;
    let intervalEnd: number = numberB;

    if (numberA > numberB) {
        intervalStart = numberB;
        intervalEnd = numberA;
    }

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if (i % numberC == 0)
            sumOfMultiplesOfNumberInInterval += i;
    }

    return sumOfMultiplesOfNumberInInterval;

}