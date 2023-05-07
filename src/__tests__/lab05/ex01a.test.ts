import { EncapsulateArray } from "../../lab05/ex01a";

describe('testing ex01a', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulateArray([]), expectedResult: [] },
        { array: new EncapsulateArray([1]), expectedResult: [] },
        { array: new EncapsulateArray([1, 2, 3, 4, 5]), expectedResult: [] }
    ];

    //Act
    test.each(happyPath)(
        'get empty array',

        ({ array, expectedResult }) => {

            let result: number[] = array.array;

            //Assert
            expect(result.length).toBe(expectedResult.length);
        });
});