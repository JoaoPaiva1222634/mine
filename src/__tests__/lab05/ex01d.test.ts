import { EncapsulatedArray } from "../../lab05/ex01b";

//Testing ex01d
describe('testing removeFirstElementEqualToValue method', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([1, 3, 2, 3, 3]), value: 3, expectedResult: [1, 2, 3, 3] },
        { array: new EncapsulatedArray([1, 1, 2, 3]), value: 1, expectedResult: [1, 2, 3] },
        { array: new EncapsulatedArray([-1, -2, -3]), value: -1, expectedResult: [-2, -3] },
        { array: new EncapsulatedArray([1, 2, 3]), value: 4, expectedResult: [1, 2, 3] },
        { array: new EncapsulatedArray([]), value: 3, expectedResult: [] }
    ];

    //Act
    test.each(happyPath)(
        'remove the first element of the array equal to a value',

        ({ array, value, expectedResult }) => {

            array.removeFirstElementEqualToValue(value);
            let result: number[] = array.array;

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});
