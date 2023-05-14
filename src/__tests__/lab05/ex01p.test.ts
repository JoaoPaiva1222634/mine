import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01p', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: false },
        { array: new EncapsulatedArray([1]), expectedResult: true},
        { array: new EncapsulatedArray([1, 1, 2, 1, 1]), expectedResult: false },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: false },
        { array: new EncapsulatedArray([4, 3, 5, 6]), expectedResult: false }

    ];

    //Act
    test.each(happyPath)(
        'return true if array has only one element and false if it has more or less',

        ({ array, expectedResult }) => {

            let result: boolean = array.checkIfArrayHasOnlyOneElement();

            //Assert
            expect(result).toBe(expectedResult);
        });
});