export function getAverageOfMultiplesOfXOrYInInterval(numberA: number, numberB: number, numberX: number, numberY: number): number {

    let intervalStart: number = numberA;
    let intervalEnd: number = numberB;
    let sumOfMultiplesOfXOrYInInterval: number = 0;
    let numberOfMultiplesOfXOrY: number = 0;
    
    if (numberA > numberB) {
        intervalStart = numberB;
        intervalEnd = numberA;
    }

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if (i % numberX == 0 || i % numberY == 0) {
            sumOfMultiplesOfXOrYInInterval += i;
            numberOfMultiplesOfXOrY++
        }
    }

    if (numberOfMultiplesOfXOrY == 0)
        throw new RangeError ('There are 0 multiples in interval, a number is not divisible by 0');

    let averageOfMultiplesOfXOrYInInterval: number = sumOfMultiplesOfXOrYInInterval / numberOfMultiplesOfXOrY;

    return averageOfMultiplesOfXOrYInInterval;
}