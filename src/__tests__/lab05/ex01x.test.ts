import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01x', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: [] },
        { array: new EncapsulatedArray([12, 32, 42]), expectedResult: [] },
        { array: new EncapsulatedArray([222, 555, 888, 444]), expectedResult: [222, 555, 888, 444] },
        { array: new EncapsulatedArray([22, 21, 555, 232]), expectedResult: [22, 555] },
        { array: new EncapsulatedArray([1, 177, 333, 11]), expectedResult: [1, 333, 11] }

    ];

    //Act
    test.each(happyPath)(
        'return the elements that are composed exclusively by the same digit',

        ({ array, expectedResult }) => {

            let result: number[] = array.getElementsThatAreComposedExclusivelyByTheSameDigit();

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});