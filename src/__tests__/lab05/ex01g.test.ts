import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01g', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: undefined },
        { array: new EncapsulatedArray([1]), expectedResult: 1 },
        { array: new EncapsulatedArray([1, 2, 3, 4]), expectedResult: 4 },
        { array: new EncapsulatedArray([4, 1, 1, 1]), expectedResult: 4 },
        { array: new EncapsulatedArray([4, 4, 4, 5]), expectedResult: 5 }

    ];

    //Act
    test.each(happyPath)(
        'get the highest element of an array',

        ({ array, expectedResult }) => {

            let result: number = array.getBiggestElementOfArray();

            //Assert
            expect(result).toBe(expectedResult);
        });
});