import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01q', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: false },
        { array: new EncapsulatedArray([1]), expectedResult: false },
        { array: new EncapsulatedArray([1, 1, 2, 1, 1]), expectedResult: false },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: false },
        { array: new EncapsulatedArray([4, 8, 2, 6]), expectedResult: true }

    ];

    //Act
    test.each(happyPath)(
        'return true if array has only even elements and false if not',

        ({ array, expectedResult }) => {

            let result: boolean = array.checkIfArrayHasOnlyEvenElements();

            //Assert
            expect(result).toBe(expectedResult);
        });
});