import { getPositionOfAcumulatedProductBiggerThanValue } from "../../lab03/ex11";

describe('testing function getPositionOfAcumulatedProductBiggerThanValue', () => {
    test('testing for [1,5,6,7,8] and 33 is 3', () => {
        //Arrange
        const numList: number[] = [1, 5, 6, 7, 9];
        const value: number = 33;
        const expectedPosition: number = 3;

        //Act
        let position: number = getPositionOfAcumulatedProductBiggerThanValue(numList, value);

        //Assert
        expect(position).toBe(expectedPosition);
    });

    test('testing for [1,5,6,7,8] and 3500 is -1', () => {
        //Arrange
        const numList: number[] = [1, 5, 6, 7, 9];
        const value: number = 3500;
        const expectedPosition: number = -1;

        //Act
        let position: number = getPositionOfAcumulatedProductBiggerThanValue(numList, value);

        //Assert
        expect(position).toBe(expectedPosition);
    });

    test('testing for [1] and 1 is -1', () => {
        //Arrange
        const numList: number[] = [1];
        const value: number = 1;
        const expectedPosition: number = -1;

        //Act
        let position: number = getPositionOfAcumulatedProductBiggerThanValue(numList, value);

        //Assert
        expect(position).toBe(expectedPosition);
    });

    test('testing for [1,2] and 1 is 1', () => {
        //Arrange
        const numList: number[] = [1, 2];
        const value: number = 1;
        const expectedPosition: number = 1;

        //Act
        let position: number = getPositionOfAcumulatedProductBiggerThanValue(numList, value);

        //Assert
        expect(position).toBe(expectedPosition);
    });

    test('testing for [1,5,7] and 35 is 2', () => {
        //Arrange
        const numList: number[] = [1, 5, 7];
        const value: number = 34;
        const expectedPosition: number = 2;

        //Act
        let position: number = getPositionOfAcumulatedProductBiggerThanValue(numList, value);

        //Assert
        expect(position).toBe(expectedPosition);
    });

    test('testing for [1,5,7] and 35 is 2', () => {
        //Arrange
        const numList: number[] = [];
        const value: number = 34;
        const expectedPosition: number = -1;

        //Act
        let position: number = getPositionOfAcumulatedProductBiggerThanValue(numList, value);

        //Assert
        expect(position).toBe(expectedPosition);
    });
});