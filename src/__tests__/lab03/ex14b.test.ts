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
        for (let i = 0; i != expectedResult.length; i++)
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

    test('For input arrays of different length should throw error', () => {
        expect(() => {
            checkIfDogEatsProperAmountOfFoodForListOfValues([0,1], [100]);
        }).toThrow('Provided arrays must have the same length');
    });

    test('For empty arrays should throw error', () => {
        expect(() => {
            checkIfDogEatsProperAmountOfFoodForListOfValues([], []);
        }).toThrow('There must be at least one value in the provided arrays');
    });
});