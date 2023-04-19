import { getMultiplesOf3InInterval } from "../../lab04/ex09";

describe('testing function getMultiplesOf3InInterval', () => {
    test('testing for 4 to 10 result is [6, 9]', () => {
        //Arrange
        const intervalStart: number = 4;
        const intervalEnd: number = 10;
        const expectedMultiplesOf3InInterval: number[] = [6, 9];

        //Act
        let multiplesOf3InInterval: number[] = getMultiplesOf3InInterval(intervalStart, intervalEnd);

        //Assert
        for (let i = 0; i != expectedMultiplesOf3InInterval.length; i++)
            expect(multiplesOf3InInterval[i]).toBe(expectedMultiplesOf3InInterval[i])
    });

    test('testing for 3 to 3 result is [3]', () => {
        //Arrange
        const intervalStart: number = 3;
        const intervalEnd: number = 3;
        const expectedMultiplesOf3InInterval: number[] = [3];

        //Act
        let multiplesOf3InInterval: number[] = getMultiplesOf3InInterval(intervalStart, intervalEnd);

        //Assert
        for (let i = 0; i != expectedMultiplesOf3InInterval.length; i++)
            expect(multiplesOf3InInterval[i]).toBe(expectedMultiplesOf3InInterval[i])
    });

    test('testing for 0 to 2 result is []', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 2;
        const expectedMultiplesOf3InInterval: number[] = [];

        //Act
        let multiplesOf3InInterval: number[] = getMultiplesOf3InInterval(intervalStart, intervalEnd);

        //Assert
        for (let i = 0; i != expectedMultiplesOf3InInterval.length; i++)
            expect(multiplesOf3InInterval[i]).toBe(expectedMultiplesOf3InInterval[i])
    });

    test('testing for 0 to 2 result is []', () => {
        //Arrange
        const intervalStart: number = NaN;
        const intervalEnd: number = NaN;
        const expectedMultiplesOf3InInterval: number[] = [];

        //Act
        let multiplesOf3InInterval: number[] = getMultiplesOf3InInterval(intervalStart, intervalEnd);

        //Assert
        for (let i = 0; i != expectedMultiplesOf3InInterval.length; i++)
            expect(multiplesOf3InInterval[i]).toBe(expectedMultiplesOf3InInterval[i])
    });
});