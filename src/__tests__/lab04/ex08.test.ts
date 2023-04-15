import { getFirstNNumbersOfAnArray } from "../../lab04/ex08";

describe('testing function getFirstNNumbersOfAnArray', () => {
    test('testing if for [3, 4, 6, 8, 1, 23, 89, 12] and 4 result is [3, 4, 6, 8]', () => {
        //Arrange
        const array: number[] = [3, 4, 6, 8, 1, 23, 89, 12];
        const n: number = 4;
        const expectedNArray: number[] = [3, 4, 6, 8];

        //Act
        let nArray: number[] = getFirstNNumbersOfAnArray(array, n);

        //Assert
        for (let i = 0; i != nArray.length; i++)
            expect(nArray[i]).toBe(expectedNArray[i]);
    });

    test('testing if for [3, 4, 6, 8, 1, 23, 89, 12] and 8 result is [3, 4, 6, 8, 1, 23, 89, 12]', () => {
        //Arrange
        const array: number[] = [3, 4, 6, 8, 1, 23, 89, 12];
        const n: number = 8;
        const expectedNArray: number[] = [3, 4, 6, 8, 1, 23, 89, 12];

        //Act
        let nArray: number[] = getFirstNNumbersOfAnArray(array, n);

        //Assert
        for (let i = 0; i != nArray.length; i++)
            expect(nArray[i]).toBe(expectedNArray[i]);
    });

    test('testing if for [3, 4, 6, 8, 1, 23, 89, 12] and 0 result is []', () => {
        //Arrange
        const array: number[] = [3, 4, 6, 8, 1, 23, 89, 12];
        const n: number = 0;
        const expectedNArray: number[] = [];

        //Act
        let nArray: number[] = getFirstNNumbersOfAnArray(array, n);

        //Assert
        for (let i = 0; i != nArray.length; i++)
            expect(nArray[i]).toBe(expectedNArray[i]);
    });

    test('testing if for [3, 4, 6, 8, 1, 23, 89, 12] and 0 result is []', () => {
        //Arrange
        const array: number[] = [3];
        const n: number = 1;
        const expectedNArray: number[] = [3];

        //Act
        let nArray: number[] = getFirstNNumbersOfAnArray(array, n);

        //Assert
        for (let i = 0; i != nArray.length; i++)
            expect(nArray[i]).toBe(expectedNArray[i]);
    });

    test('for [3, 4, 6, 8, 1, 23, 89, 12] and -1 should throw error', () => {
        //Arrange
        const array: number[] = [3, 4, 6, 8, 1, 23, 89, 12];
        const n: number = NaN;

        //Act

        //Assert
        expect(() => {
            getFirstNNumbersOfAnArray(array, n);
        }).toThrow('Invalid array length');
    });
});