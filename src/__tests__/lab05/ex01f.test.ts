import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01f', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: 0 },
        { array: new EncapsulatedArray([1]), expectedResult: 1 },
        { array: new EncapsulatedArray([1, 2, 3, 4]), expectedResult: 4 }

    ];

    //Act
    test.each(happyPath)(
        'get the number of elements of an array',

        ({ array, expectedResult }) => {

            let result: number = array.getNumberOfElementsOfArray();

            //Assert
            expect(result).toBe(expectedResult);
        });
});