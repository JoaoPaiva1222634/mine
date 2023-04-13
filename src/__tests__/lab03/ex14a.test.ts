import { checkIfSmallDogEatsProperAmountOfFood } from "../../lab03/ex14a";
import { checkIfMediumDogEatsProperAmountOfFood } from "../../lab03/ex14a";
import { checkIfBigDogEatsProperAmountOfFood } from "../../lab03/ex14a";
import { checkIfGiantDogEatsProperAmountOfFood } from "../../lab03/ex14a";
import { checkIfDogEatsProperAmountOfFood } from "../../lab03/ex14a";

describe('testing function checkIfSmallDogEatsProperAmountOfFood', () => {
    test('testing if foodAmount below 100 result is -1', () => {
        //Arrange
        const foodAmount: number = 90;
        const expectedResult: number = -1;

        //Act
        let result: number = checkIfSmallDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount above 100 result is 1', () => {
        //Arrange
        const foodAmount: number = 110;
        const expectedResult: number = 1;

        //Act
        let result: number = checkIfSmallDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount is 100 result is 0', () => {
        //Arrange
        const foodAmount: number = 100;
        const expectedResult: number = 0;

        //Act
        let result: number = checkIfSmallDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

describe('testing function checkIfMediumDogEatsProperAmountOfFood', () => {
    test('testing if foodAmount below 250 result is -1', () => {
        //Arrange
        const foodAmount: number = 240;
        const expectedResult: number = -1;

        //Act
        let result: number = checkIfMediumDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount above 260 result is 1', () => {
        //Arrange
        const foodAmount: number = 260;
        const expectedResult: number = 1;

        //Act
        let result: number = checkIfMediumDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount is 250 result is 0', () => {
        //Arrange
        const foodAmount: number = 250;
        const expectedResult: number = 0;

        //Act
        let result: number = checkIfMediumDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

describe('testing function checkIfBigDogEatsProperAmountOfFood', () => {
    test('testing if foodAmount below 300 result is -1', () => {
        //Arrange
        const foodAmount: number = 290;
        const expectedResult: number = -1;

        //Act
        let result: number = checkIfBigDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount above 300 result is 1', () => {
        //Arrange
        const foodAmount: number = 310;
        const expectedResult: number = 1;

        //Act
        let result: number = checkIfBigDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount is 300 result is 0', () => {
        //Arrange
        const foodAmount: number = 300;
        const expectedResult: number = 0;

        //Act
        let result: number = checkIfBigDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

describe('testing function checkIfGiantDogEatsProperAmountOfFood', () => {
    test('testing if foodAmount below 500 result is -1', () => {
        //Arrange
        const foodAmount: number = 490;
        const expectedResult: number = -1;

        //Act
        let result: number = checkIfGiantDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount above 500 result is 1', () => {
        //Arrange
        const foodAmount: number = 510;
        const expectedResult: number = 1;

        //Act
        let result: number = checkIfGiantDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount is 500 result is 0', () => {
        //Arrange
        const foodAmount: number = 500;
        const expectedResult: number = 0;

        //Act
        let result: number = checkIfGiantDogEatsProperAmountOfFood(foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });
});

describe('testing function checkIfDogEatsProperAmountOfFood', () => {
    test('testing if for dogWeight 10 and foodAmount below 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 10;
        const foodAmount: number = 90;
        const expectedResult: number = -1;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for dogWeight 5 and foodAmount below 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 10;
        const foodAmount: number = 100;
        const expectedResult: number = 0;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for dogWeight 5 and foodAmount below 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 10;
        const foodAmount: number = 101;
        const expectedResult: number = 1;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for dogWeight 25 foodAmount above 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 25;
        const foodAmount: number = 110;
        const expectedResult: number = -1;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for dogWeight 25 foodAmount above 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 25;
        const foodAmount: number = 250;
        const expectedResult: number = 0;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for dogWeight 25 foodAmount above 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 25;
        const foodAmount: number = 260;
        const expectedResult: number = 1;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount is 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 45;
        const foodAmount: number = 100;
        const expectedResult: number = -1;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount is 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 45;
        const foodAmount: number = 300;
        const expectedResult: number = 0;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if foodAmount is 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 45;
        const foodAmount: number = 301;
        const expectedResult: number = 1;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for dogWeight 50 foodAmount above 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 50;
        const foodAmount: number = 110;
        const expectedResult: number = -1;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for dogWeight 50 foodAmount above 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 50;
        const foodAmount: number = 500;
        const expectedResult: number = 0;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for dogWeight 50 foodAmount above 100 result is -1', () => {
        //Arrange
        const dogWeight: number = 50;
        const foodAmount: number = 501;
        const expectedResult: number = 1;

        //Act
        let result: number = checkIfDogEatsProperAmountOfFood(dogWeight, foodAmount);

        //Assert
        expect(result).toBe(expectedResult);
    });

    /*test('For values not above 0 should throw error', () => {
        expect(() => {
            checkIfDogEatsProperAmountOfFood(0, 100);
        }).toThrow('Dog weight must be above 0');
    });*/
});