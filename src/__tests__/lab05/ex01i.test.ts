import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01i', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: NaN },
        { array: new EncapsulatedArray([1]), expectedResult: 1 },
        { array: new EncapsulatedArray([1, 1, 1, 1]), expectedResult: 1 },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: 2 },
        { array: new EncapsulatedArray([4, 4, 4, 6]), expectedResult: 4.5 }

    ];

    //Act
    test.each(happyPath)(
        'get the average value of the elements of an array',

        ({ array, expectedResult }) => {

            let result: number = array.getAverageOfAllElementsOfArray();

            //Assert
            expect(result).toBe(expectedResult);
        });
});