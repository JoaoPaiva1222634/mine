import { checkIfDogEatsProperAmountOfFood } from "./ex14a";

function checkIfDogEatsProperAmountOfFoodForRandomWeightAndFoodAmount() {
    let dogWeight: number = 1;
    let result: number = 0;

    do {
        dogWeight = Math.random() * (160 + 160) - 160;
        let foodAmount: number = Math.random() * 750;
        result = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);
        console.log(dogWeight, foodAmount, result);

    } while (dogWeight >= 0)
}

console.log(checkIfDogEatsProperAmountOfFoodForRandomWeightAndFoodAmount())