import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01z', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), n: 2, expectedResult: [] },
        { array: new EncapsulatedArray([1]), n: 2, expectedResult: [] },
        { array: new EncapsulatedArray([12]), n: 2, expectedResult: [12] },
        { array: new EncapsulatedArray([123, 157, 1679]), n: 3, expectedResult: [123, 157, 1679] },
        { array: new EncapsulatedArray([10, 121, 342, 382]), n: 2, expectedResult: [] },
        { array: new EncapsulatedArray([23, 379, 13, 471]), n: 3, expectedResult: [379] },
        { array: new EncapsulatedArray([8208, 177, 12379, 11]), n: 4, expectedResult: [12379] }

    ];

    //Act
    test.each(happyPath)(
        'return the elements that are ascending sequences of n digits',

        ({ array, n, expectedResult }) => {

            let result: number[] = array.getElementsThatAreAscendingSequenceOfAtLeastNDigits(n);

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});