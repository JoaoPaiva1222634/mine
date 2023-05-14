import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01h', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: undefined },
        { array: new EncapsulatedArray([1]), expectedResult: 1 },
        { array: new EncapsulatedArray([1, 2, 3, 4]), expectedResult: 1 },
        { array: new EncapsulatedArray([4, 1, 1, 1]), expectedResult: 1 },
        { array: new EncapsulatedArray([4, 4, 4, 5]), expectedResult: 4 }

    ];

    //Act
    test.each(happyPath)(
        'get the lowest element of an array',

        ({ array, expectedResult }) => {

            let result: number = array.getSmallestElementOfArray();

            //Assert
            expect(result).toBe(expectedResult);
        });
});