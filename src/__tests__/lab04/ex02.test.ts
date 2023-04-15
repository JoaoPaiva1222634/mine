import { getDigitsOfNumberIntoArray } from "../../lab04/ex02";

describe('getDigitsOfNumberIntoArray', () => {
    test('testing for 36781 result is [3,6,7,8,1]', () => {
        //Arrange
        const value: number = 36781;
        const expectedArray: number[] = [3, 6, 7, 8, 1];

        //Act
        let array: number[] = getDigitsOfNumberIntoArray(value);

        //Assert
        for (let i = 0; i != array.length; i++)
            expect(array[i]).toBe(expectedArray[i]);
    });
});