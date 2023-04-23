export function getPrimeNumbersInArray(array: number[]): number[] {

    let primeNumbersOfArray: number[] = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i] >= 2) {
            primeNumbersOfArray.push(array[i]);

            /*
    this is wrong test just between 2 and 9 isn't
    
            for (let j = 2; j <= 9; j++)
                if (array[i] % j == 0 && array[i] != j || array[i] == 1) {
                    primeNumbersOfArray.pop();
                    break;
                }
            */

            /*
    testing two many values. it is enough to test untill the square root of the number.
    To check if a number is prime, we need to check for divisibility by all possible divisors up to the square
    root of the number. This is because any factor of a number that is greater than its square root must also
    have a corresponding factor that is less than its square root.
    
        let j: number = 2;
        let nonPrime: boolean = false;
        let max: number = 9;
    
        if (array[i] > 9)
            max = array[i];
    
        while (j <= max && nonPrime == false) {
            if (array[i] % j == 0 && array[i] != j || array[i] == 1) {
                primeNumbersOfArray.pop();
                nonPrime = true;
            }
            j = j + 1;
        }
    }
    */

            let j: number = 2;
            let max: number = Math.sqrt(array[i]);

            while (j <= max) {

                if (array[i] % j == 0) {
                    primeNumbersOfArray.pop();
                }

                j++;
            }
        }
    }

    return primeNumbersOfArray;
}