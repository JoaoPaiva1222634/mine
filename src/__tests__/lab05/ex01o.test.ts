import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01o', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: true },
        { array: new EncapsulatedArray([1]), expectedResult: false},
        { array: new EncapsulatedArray([1, 1, 2, 1, 1]), expectedResult: false },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: false },
        { array: new EncapsulatedArray([4, 3, 5, 6]), expectedResult: false }

    ];

    //Act
    test.each(happyPath)(
        'return true if array is empty and false if it is not',

        ({ array, expectedResult }) => {

            let result: boolean = array.checkIfArrayIsEmpty();

            //Assert
            expect(result).toBe(expectedResult);
        });
});