import { EncapsulatedArray } from "../../lab05/ex01b";

//Testing ex01c
describe('testing addNewElement method', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), newElement: 1, expectedResult: [1] },
        { array: new EncapsulatedArray([1, 2, 3]), newElement: 1, expectedResult: [1, 2, 3, 1] },
        { array: new EncapsulatedArray([-1, -2, -3]), newElement: 1, expectedResult: [-1, -2, -3, 1] }
    ];

    //Act
    test.each(happyPath)(
        'add a new element to the array',

        ({ array, newElement, expectedResult }) => {

            array.addNewElement(newElement);
            let result: number[] = array.array

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});