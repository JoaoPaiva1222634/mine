function getPositionOfAcumulatedProductBiggerThanValue(numList: number[], value: number): number {
    let accumulatedProduct: number = 1;

    for (let i = 0; i <= numList.length - 1; i++) {
        accumulatedProduct = accumulatedProduct * numList[i]

        if (accumulatedProduct > value) {
            return i;
        }
    }

    return -1;
}