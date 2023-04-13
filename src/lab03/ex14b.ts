import { checkIfDogEatsProperAmountOfFood } from "./ex14a";

/*
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
*/
//THIS WAS NOT WHAT WAS EXPECTED. SHOULD ADMIT THAT A LIST OF VALUES WOULD BE PROVIDED IN ARRAYS.

export function checkIfDogEatsProperAmountOfFoodForListOfValues(dogWeightList: number[], foodAmountList: number[]): number[] {

    let n = 0;
    let dogWeight: number = dogWeightList[n];
    let foodAmount: number = foodAmountList[n];
    let result: number = 0;
    let resultList: number[] = [];

    do {

        dogWeight = dogWeightList[n];
        foodAmount = foodAmountList[n];
        result = checkIfDogEatsProperAmountOfFood(dogWeightList[n], foodAmountList[n]);
        resultList[n] = result;
        n++;

    } while (dogWeight >= 0)

    return resultList;
}