export function getProductOfAllMultiplesOfNumberInInterval(numberA: number, numberB: number, numberC: number): number {

    let intervalStart: number = numberA;
    let intervalEnd: number = numberB;
    let productOfAllMultiplesOfNumberInInterval: number = 1;

    if (numberA > numberB) {
        intervalStart = numberB;
        intervalEnd = numberA;
    }

    for (let i = intervalStart; i <= intervalEnd; i++) {
        if (i % numberC == 0)
            productOfAllMultiplesOfNumberInInterval *= i;
    }

    return productOfAllMultiplesOfNumberInInterval;
}