export function checkIfDogEatsProperAmountOfFood(dogWeight: number, foodAmount: number): number {
    let result: number = checkIfGiantDogEatsProperAmountOfFood(foodAmount);

    if (dogWeight <= 10) {
        result = checkIfSmallDogEatsProperAmountOfFood(foodAmount);
    } else {
        if (dogWeight <= 25) {
            result = checkIfMediumDogEatsProperAmountOfFood(foodAmount);
        } else {
            if (dogWeight <= 45) {
                result = checkIfBigDogEatsProperAmountOfFood(foodAmount);
            }
        }
    }

    return result;
}

export function checkIfSmallDogEatsProperAmountOfFood(foodAmount: number): number {
    let result: number = 0;

    if (foodAmount > 100) {
        result = 1;
    } else if (foodAmount < 100) {
        result = -1;
    }

    return result;
}

export function checkIfMediumDogEatsProperAmountOfFood(foodAmount: number): number {
    let result: number = 0;

    if (foodAmount > 250) {
        result = 1;
    } else if (foodAmount < 250) {
        result = -1;
    }

    return result;
}

export function checkIfBigDogEatsProperAmountOfFood(foodAmount: number): number {
    let result: number = 0;

    if (foodAmount > 300) {
        result = 1;
    } else if (foodAmount < 300) {
        result = -1;
    }

    return result;
}

export function checkIfGiantDogEatsProperAmountOfFood(foodAmount: number): number {
    let result: number = 0;

    if (foodAmount > 500) {
        result = 1;
    } else if (foodAmount < 500) {
        result = -1;
    }

    return result;
}