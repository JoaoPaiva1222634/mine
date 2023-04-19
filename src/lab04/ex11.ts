/*

/**
 * 
 * @param intervalStart initial number of interval
 * @param intervalEnd final value of interval
 * @param multiplesOfArray array with number to check for common multiples
 * @returns array with all the common multiples of the numbers in the multiplesArray
 

export function getCommonMultiplesOfNNumberInInterval(intervalStart: number, intervalEnd: number, multiplesOfArray: number[]): number[] {

    let multiplesOfEachN: number[] = getMultiplesOfEachNNumberInInterval(intervalStart, intervalEnd, multiplesOfArray);
    let commonMultiplesOfNNumberInInterval: number[] = [];
    let arrayPositionOfcommonMultiplesOfNNumbersInInterval: number = 0;
    let j: number = 0;
    let numberToCount: number = multiplesOfEachN[j];
    let count: number = 0;

    do {

        for (let i = j + 1; i < multiplesOfEachN.length; i++) {

            if (multiplesOfEachN[i] == numberToCount) { //check how many times a number repeats itself in the muliplesOfEachN array
                multiplesOfEachN[i] = -1; //replaces the repeated number for -1 so it will not count on a second or third run
                count++;

                if (count == multiplesOfArray.length - 1 && numberToCount != -1) { //if a number is repeated the same amount of times as the number of values in the multiplesOfArray it means it is a common multiple of all of them
                    commonMultiplesOfNNumberInInterval[arrayPositionOfcommonMultiplesOfNNumbersInInterval] = numberToCount;
                    arrayPositionOfcommonMultiplesOfNNumbersInInterval++;
                }
            }
        }

        j++;
        numberToCount = multiplesOfEachN[j];
        count = 0;

    } while (j < multiplesOfEachN.length)

    return commonMultiplesOfNNumberInInterval;
}

/**
 * 
 * @param intervalStart Start value of the interval
 * @param intervalEnd End value of the interval
 * @param multiplesOfArray Array of the numbers to check for multiples
 * @returns Array of results that are multiples of each number of multiplesOfArray
 

export function getMultiplesOfEachNNumberInInterval(intervalStart: number, intervalEnd: number, multiplesOfArray: number[]): number[] {

    if (multiplesOfArray.length < 1)
        throw new RangeError('Array must have at least one value')

    let multiplesOfEachN: number[] = [];
    let arrayPositionOfMultiplesOfEachN: number = 0;
    let j: number = 0;

    do {
        for (let i = intervalStart; i <= intervalEnd; i++) {

            if (i % multiplesOfArray[j] == 0) {
                multiplesOfEachN[arrayPositionOfMultiplesOfEachN] = i;
                arrayPositionOfMultiplesOfEachN++;
            }
        }

        j++;

    } while (j < multiplesOfArray.length)

    return multiplesOfEachN;
}
*/

/**
 * 
 * @param intervalStart initial value of the interval
 * @param intervalEnd final value of the interval
 * @param numbersArray array of numbers to check if are multiples
 * @returns returns the numbers in the interval that are common multiples of the numbers in the numbersArray
 */

export function getCommonMultiplesOfNNumbersInInterval(intervalStart: number, intervalEnd: number, numbersArray: number[]): number[] {

    if (numbersArray.length < 1)
        throw new RangeError('Array must have at least one value')

    let commonMultiplesOfNNumbersInInterval: number[] = [];

    for (let i = intervalStart; i <= intervalEnd; i++) {

        for (let j = 0; i % numbersArray[j] == 0; j++) {

            if (j == numbersArray.length - 1)
                commonMultiplesOfNNumbersInInterval.push(i);
        }
    }

    return commonMultiplesOfNNumbersInInterval;
}