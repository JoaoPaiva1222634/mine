import { getFirstArmstrongNumberOfInterval } from "../../lab03/ex09f"; 

describe('testing function getFirstArmstrongNumberOfInterval', () => {
    test('check if from 10 to 153 is 153', () => {
        //Arrange
        const intervalStart: number = 10;
        const intervalEnd: number = 153;
        const expectedFirstArmstrongNumberOfInterval: number = 153;

        //Act
        let firstArmstrongNumberOfInterval: number = getFirstArmstrongNumberOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(firstArmstrongNumberOfInterval).toBe(expectedFirstArmstrongNumberOfInterval);
    });

    test('check if from 0 to 0 is 0', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 0;
        const expectedFirstArmstrongNumberOfInterval: number = 0;

        //Act
        let firstArmstrongNumberOfInterval: number = getFirstArmstrongNumberOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(firstArmstrongNumberOfInterval).toBe(expectedFirstArmstrongNumberOfInterval);
    });

    test('check if from 1 to 1 is 1', () => {
        //Arrange
        const intervalStart: number = 1;
        const intervalEnd: number = 10;
        const expectedFirstArmstrongNumberOfInterval: number = 1;

        //Act
        let firstArmstrongNumberOfInterval: number = getFirstArmstrongNumberOfInterval(intervalStart, intervalEnd);

        //Assert
        expect(firstArmstrongNumberOfInterval).toBe(expectedFirstArmstrongNumberOfInterval);
    });

    test('Negative numbers should throw error', () => {
        expect(() => {
            getFirstArmstrongNumberOfInterval(2, -11);
        }).toThrow('It must be an interval of positive numbers');
    });

    test('Negative numbers should throw error', () => {
        expect(() => {
            getFirstArmstrongNumberOfInterval(-1, -11);
        }).toThrow('It must be an interval of positive numbers');
    });

    test('Negative numbers should throw error', () => {
        expect(() => {
            getFirstArmstrongNumberOfInterval(-1, 3);
        }).toThrow('It must be an interval of positive numbers');
    });
});