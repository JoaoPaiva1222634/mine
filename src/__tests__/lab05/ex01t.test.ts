import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01t', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: [] },
        { array: new EncapsulatedArray([1]), expectedResult: [] },
        { array: new EncapsulatedArray([1, 1, 2, 1, 1]), expectedResult: [2] },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: [4] },
        { array: new EncapsulatedArray([9, 7, 3, 1]), expectedResult: [9, 7] }

    ];

    //Act
    test.each(happyPath)(
        'return the element that are bigger than the average value',

        ({ array, expectedResult }) => {

            let result: number[] = array.getElementsBiggerThanAverageValue();

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});