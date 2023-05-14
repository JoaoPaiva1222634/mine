import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01u', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: [] },
        { array: new EncapsulatedArray([1, 33, 42]), expectedResult: [42] },
        { array: new EncapsulatedArray([468, 242, 228, 4]), expectedResult: [468, 242, 228, 4] },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: [4, 2] },
        { array: new EncapsulatedArray([9, 7, 3, 1]), expectedResult: [] }

    ];

    //Act
    test.each(happyPath)(
        'return the elements that are composed only by even elements',

        ({ array, expectedResult }) => {

            let result: number[] = array.getElementsComposedOnlyByEvenDigits();

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});