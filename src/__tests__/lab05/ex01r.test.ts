import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01r', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: false },
        { array: new EncapsulatedArray([1]), expectedResult: true },
        { array: new EncapsulatedArray([1, 1, 2, 1, 1]), expectedResult: false },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: false },
        { array: new EncapsulatedArray([9, 7, 3, 1]), expectedResult: true }

    ];

    //Act
    test.each(happyPath)(
        'return true if array has only odd elements and false if not',

        ({ array, expectedResult }) => {

            let result: boolean = array.checkIfArrayHasOnlyOddElements();

            //Assert
            expect(result).toBe(expectedResult);
        });
});