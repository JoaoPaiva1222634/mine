import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01k', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: NaN },
        { array: new EncapsulatedArray([2]), expectedResult: NaN },
        { array: new EncapsulatedArray([1, 1, 1, 1, 2]), expectedResult: 1 },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: 1 },
        { array: new EncapsulatedArray([4, 3, 5, 6]), expectedResult: 4 }

    ];

    //Act
    test.each(happyPath)(
        'get the average value of the odd elements of an array',

        ({ array, expectedResult }) => {

            let result: number = array.getAverageOfAllOddElements();

            //Assert
            expect(result).toBe(expectedResult);
        });
});