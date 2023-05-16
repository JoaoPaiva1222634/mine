import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01w', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: [] },
        { array: new EncapsulatedArray([12, 32, 42]), expectedResult: [] },
        { array: new EncapsulatedArray([232, 545, 868, 454]), expectedResult: [232, 545, 868, 454] },
        { array: new EncapsulatedArray([22, 21, 521, 232]), expectedResult: [22, 232] },
        { array: new EncapsulatedArray([991, 177, 333, 11]), expectedResult: [333, 11] }

    ];

    //Act
    test.each(happyPath)(
        'return the elements that are palindromes',

        ({ array, expectedResult }) => {

            let result: number[] = array.getElementsThaArePalindromes();

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});