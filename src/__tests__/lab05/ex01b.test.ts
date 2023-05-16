import { EncapsulatedArray } from "../../lab05/ex01b";

//Testing ex01b
describe('testing constructor', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: [] },
        { array: new EncapsulatedArray([1, 2, 3]), expectedResult: [1, 2, 3] },
        { array: new EncapsulatedArray([-1, -2, -3]), expectedResult: [-1, -2, -3] }
    ];

    //Act
    test.each(happyPath)(
        'encapsulate an array of numbers',

        ({ array, expectedResult }) => {

            let result: number[] = array.array;

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});