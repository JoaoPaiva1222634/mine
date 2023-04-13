export function getPositionOfAcumulatedProductBiggerThanValue(numList: number[], value: number): number {

    /*    let accumulatedProduct: number = 1;
    
        for (let i = 0; i < numList.length; i++) {
            accumulatedProduct = accumulatedProduct * numList[i];
    
            if (accumulatedProduct > value) {
                return i; //I should not use return inside a for cycle
            }
        }
    
        return -1;
    }
    */

    /*
    export function getPositionOfAcumulatedProductBiggerThanValue(numList: number[], value: number): number {

    let accumulatedProduct: number = 1;
    let i: number = -1;

    for (i = 0; i < numList.length && accumulatedProduct <= value; i++) {
        accumulatedProduct = accumulatedProduct * numList[i];
    }

    return i;
}
*/

    let accumulatedProduct: number = 1;
    let result: number = -1;

    for (let i = 0; i != numList.length; i++) {
        accumulatedProduct = accumulatedProduct * numList[i];

        if (accumulatedProduct > value) {
            result = i; //I should not use return inside a loop
            break; //Should not use break either
        }
    }

    return result;
}