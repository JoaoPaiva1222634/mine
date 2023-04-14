export function getAverageOfMultiplesOfNumberInInterval(numberA: number, numberB: number, numberC: number): number {

    let intervalStart: number = numberA;
    let intervalEnd: number = numberB;
    let sumOfMultiplesOfNumberInInterval: number = 0;
    let numberOfMultiples: number = 0;
    
    if (numberA > numberB) {
        intervalStart = numberB;
        intervalEnd = numberA;
    }

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if (i % numberC == 0) {
            sumOfMultiplesOfNumberInInterval += i;
            numberOfMultiples++;
        }
    }

    if (numberOfMultiples == 0)
        throw new RangeError ('There are 0 multiples in interval, a number is not divisible by 0');

    let averageOfMultiplesOfNumberInInterval: number = sumOfMultiplesOfNumberInInterval / numberOfMultiples;

    return averageOfMultiplesOfNumberInInterval;
}