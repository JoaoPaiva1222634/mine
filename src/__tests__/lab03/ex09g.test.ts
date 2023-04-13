import { getNumberOfArmstrongNumbersInInterval } from "../../lab03/ex09g";

describe('testing function getNumberOfArmstrongNumbersInInterval', () => {
    test('check if from 10 to 153 is 1', () => {
        //Arrange
        const intervalStart: number = 10;
        const intervalEnd: number = 153;
        const expectedCount: number = 1;

        //Act
        let count: number = getNumberOfArmstrongNumbersInInterval(intervalStart, intervalEnd);

        //Assert
        expect(count).toBe(expectedCount);
    });
});