import { getMultiplesOfNInInterval } from "../../lab04/ex10";

describe('testing function getMultiplesOfNInInterval', () => {
    test('testing for 4 to 10 and 3 result is [6, 9]', () => {
        //Arrange
        const intervalStart: number = 4;
        const intervalEnd: number = 10;
        const n: number = 3;
        const expectedMultiplesOfNInInterval: number[] = [6, 9];

        //Act
        let multiplesOfNInInterval: number[] = getMultiplesOfNInInterval(intervalStart, intervalEnd, n);

        //Assert
        for (let i = 0; i != expectedMultiplesOfNInInterval.length; i++)
            expect(multiplesOfNInInterval[i]).toBe(expectedMultiplesOfNInInterval[i])
    });

    test('testing for 4 to 10 and 5 result is [6, 9]', () => {
        //Arrange
        const intervalStart: number = 4;
        const intervalEnd: number = 10;
        const n: number = 5;
        const expectedMultiplesOfNInInterval: number[] = [5, 10];

        //Act
        let multiplesOfNInInterval: number[] = getMultiplesOfNInInterval(intervalStart, intervalEnd, n);

        //Assert
        for (let i = 0; i != expectedMultiplesOfNInInterval.length; i++)
            expect(multiplesOfNInInterval[i]).toBe(expectedMultiplesOfNInInterval[i])
    });

    test('testing for 4 to 10 and 12 result is []', () => {
        //Arrange
        const intervalStart: number = 4;
        const intervalEnd: number = 10;
        const n: number = 12;
        const expectedMultiplesOfNInInterval: number[] = [];

        //Act
        let multiplesOfNInInterval: number[] = getMultiplesOfNInInterval(intervalStart, intervalEnd, n);

        //Assert
        for (let i = 0; i != expectedMultiplesOfNInInterval.length; i++)
            expect(multiplesOfNInInterval[i]).toBe(expectedMultiplesOfNInInterval[i])
    });

    test('testing for 4 to 10 and 12 result is []', () => {
        //Arrange
        const intervalStart: number = NaN;
        const intervalEnd: number = NaN;
        const n: number = 12;
        const expectedMultiplesOfNInInterval: number[] = [];

        //Act
        let multiplesOfNInInterval: number[] = getMultiplesOfNInInterval(intervalStart, intervalEnd, n);

        //Assert
        for (let i = 0; i != expectedMultiplesOfNInInterval.length; i++)
            expect(multiplesOfNInInterval[i]).toBe(expectedMultiplesOfNInInterval[i])
    });
});