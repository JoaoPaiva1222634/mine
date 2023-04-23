import { getProductOfNumbersInArray } from "../../lab04/ex13d"

describe('testing function getProductOfNumbersInArray', () => {
    test('For [] should throw error', () => {
        //Arrange
        const array: number[] = [];

        //Act

        //Assert
        expect(() => {
            getProductOfNumbersInArray(array);
        }).toThrow('Array must have at least one value');
    });

    test('for [1] is 1', () => {
        //Arrange
        const array: number[] = [1];
        const expectedProductOfNumbersInArray: number = 1;

        //Act
        let productOfNumbersInArray: number = getProductOfNumbersInArray(array);

        //Assert
        expect(productOfNumbersInArray).toBe(expectedProductOfNumbersInArray);
    });

    test('for [1,4,7,3,9] is 756', () => {
        //Arrange
        const array: number[] = [1, 4, 7, 3, 9];
        const expectedProductOfNumbersInArray: number = 756;

        //Act
        let productOfNumbersInArray: number = getProductOfNumbersInArray(array);

        //Assert
        expect(productOfNumbersInArray).toBe(expectedProductOfNumbersInArray);
    });
});