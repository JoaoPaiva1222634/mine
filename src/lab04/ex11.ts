export function getCommonMultiplesOfNNumberInInterval(intervalStart: number, intervalEnd: number, multiplesOfArray: number[]): number[] {
    
    let commonMultiplesOfNNumberInInterval: number [] = isolateCommonMultiplesOfNNumbers(getMultiplesOfEachNNumberInInterval(intervalStart,intervalEnd,multiplesOfArray));

    return commonMultiplesOfNNumberInInterval;
}

/**
 * 
 * @param intervalStart Start value of the interval
 * @param intervalEnd End value of the interval
 * @param multiplesOfArray Array of the numbers to check for multiples
 * @returns Array of results that are multiples of each number of multiplesOfArray
 */

export function getMultiplesOfEachNNumberInInterval(intervalStart: number, intervalEnd: number, multiplesOfArray: number[]): number[] {

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

    } while (j != multiplesOfArray.length)

    return multiplesOfEachN;
}

/**
 * 
 * @param multiplesOfEachN Array with multiples of each number in the multiplesOfArray. With common multiples repeating themselves (multiplesOfArray.length) times
 * @returns Array with only the common multiples of all the number in multiplesOfArray
 */

export function isolateCommonMultiplesOfNNumbers(multiplesOfEachN: number[]): number[] {

    let commonMultiplesOfNNumbers: number[] = [];
    let arrayPositionOfcommonMultiplesOfNNumbers: number = 0;
    let j = 0;

    do {

        for (let i = j + 1; i != multiplesOfEachN.length; i++) {
            if (multiplesOfEachN[i] == multiplesOfEachN[j]) {
                commonMultiplesOfNNumbers[arrayPositionOfcommonMultiplesOfNNumbers] = multiplesOfEachN[i];
                arrayPositionOfcommonMultiplesOfNNumbers++;
            }
        }

        j++;
    } while (j < multiplesOfEachN.length)


    return commonMultiplesOfNNumbers;
}

//console.log(getMultiplesOfEachNNumberInInterval(4, 12, [2, 3]))
//console.log(isolateCommonMultiplesOfNNumbers([4, 6, 8, 10, 12, 6, 9, 12]))
//console.log(getCommonMultiplesOfNNumberInInterval(4,12,[2,3]))
