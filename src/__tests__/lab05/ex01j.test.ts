import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01j', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: NaN },
        { array: new EncapsulatedArray([1]), expectedResult: NaN },
        { array: new EncapsulatedArray([1, 1, 1, 1, 2]), expectedResult: 2 },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: 3 },
        { array: new EncapsulatedArray([4, 4, 4, 6]), expectedResult: 4.5 }

    ];

    //Act
    test.each(happyPath)(
        'get the average value of the even elements of an array',

        ({ array, expectedResult }) => {

            let result: number = array.getAverageOfAllEvenElements();

            //Assert
            expect(result).toBe(expectedResult);
        });
});