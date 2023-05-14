import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01n', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: [] },
        { array: new EncapsulatedArray([1]), expectedResult: [1] },
        { array: new EncapsulatedArray([1, 1, 2, 1, 1]), expectedResult: [2, 1, 1, 1, 1] },
        { array: new EncapsulatedArray([4, 1, 1, 2]), expectedResult: [4, 2, 1, 1] },
        { array: new EncapsulatedArray([4, 3, 5, 6]), expectedResult: [6, 5, 4, 3] }

    ];

    //Act
    test.each(happyPath)(
        'sort the elements of an array by descending order',

        ({ array, expectedResult }) => {

            array.orderArrayElementsInDescendingOrder();
            let result: number[] = array.array;

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});