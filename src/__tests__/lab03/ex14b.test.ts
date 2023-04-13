import { checkIfDogEatsProperAmountOfFoodForListOfValues } from "../../lab03/ex14b";

describe('testing function checkIfDogEatsProperAmountOfFoodForListOfValues', () => {
    test('testing for [5, 6, 7, -10, 9, -1], [59, 110, 34, 60, 50, 200]', () => {
        //Arrange
        const dogWeightList: number[] = [5, 6, 7, -10, 9, -1];
        const foodAmountList: number[] = [59, 110, 34, 60, 50, 200];
        const expectedResult: number[] = [-1, 1, -1, -1];

        //Act
        let result: number[] = checkIfDogEatsProperAmountOfFoodForListOfValues(dogWeightList, foodAmountList);

        //Assert
        for (let i = 0; i != 3; i++)
            expect(result[i]).toBe(expectedResult[i])
    });

    test('testing for [5, 6, 7, -10, 9, -1], [59, 110, 34, 60, 50, 200]', () => {
        //Arrange
        const dogWeightList: number[] = [0, 6, 7, -10, 9, -1];
        const foodAmountList: number[] = [59, 110, 34, 60, 50, 200];
        const expectedResult: number[] = [-1, 1, -1, -1];

        //Act
        let result: number[] = checkIfDogEatsProperAmountOfFoodForListOfValues(dogWeightList, foodAmountList);

        //Assert
        for (let i = 0; i != expectedResult.length; i++)
            expect(result[i]).toBe(expectedResult[i])
    });
});