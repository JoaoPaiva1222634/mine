import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01v', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: [] },
        { array: new EncapsulatedArray([1, 33, 42]), expectedResult: [] },
        { array: new EncapsulatedArray([468, 245, 238, 456]), expectedResult: [468, 245, 238, 456] },
        { array: new EncapsulatedArray([24, 21, 521, 234]), expectedResult: [24, 234] },
        { array: new EncapsulatedArray([99, 77, 333, 11]), expectedResult: [] }

    ];

    //Act
    test.each(happyPath)(
        'return the elements that are ascending sequences',

        ({ array, expectedResult }) => {

            let result: number[] = array.getElementsThatAreAscendingSequences();

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});