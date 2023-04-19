import { getCommonMultiplesOfNNumbersInInterval } from "../../lab04/ex11";

describe('testing function getCommonMultiplesOfNNumbersInInterval', () => {
    test('testing for 6 to 12 and [2, 3] result is [6, 12]', () => {
        //Arrange
        const intervalStart: number = 6;
        const intervalEnd: number = 12;
        const multiplesOfArray: number[] = [2, 3];
        const expectedCommonMultiplesOfNNumbersInInterval: number[] = [6, 12];

        //Act
        let commonMultiplesOfNNumbersInInterval: number[] = getCommonMultiplesOfNNumbersInInterval(intervalStart, intervalEnd, multiplesOfArray);

        //Assert
        for (let i = 0; i < expectedCommonMultiplesOfNNumbersInInterval.length; i++)
            expect(commonMultiplesOfNNumbersInInterval[i]).toBe(expectedCommonMultiplesOfNNumbersInInterval[i]);
    });

    test('testing for 0 to 12 and [15] result is [0]', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 12;
        const multiplesOfArray: number[] = [15];
        const expectedCommonMultiplesOfNNumberInInterval: number[] = [0];

        //Act
        let commonMultiplesOfNNumberInInterval: number[] = getCommonMultiplesOfNNumbersInInterval(intervalStart, intervalEnd, multiplesOfArray);

        //Assert
        for (let i = 0; i < commonMultiplesOfNNumberInInterval.length; i++)
            expect(commonMultiplesOfNNumberInInterval[i]).toBe(expectedCommonMultiplesOfNNumberInInterval[i]);
    });

    test('testing for 14 to 12 and [12] result is []', () => {
        //Arrange
        const intervalStart: number = 14;
        const intervalEnd: number = 12;
        const multiplesOfArray: number[] = [12];
        const expectedCommonMultiplesOfNNumberInInterval: number[] = [];

        //Act
        let commonMultiplesOfNNumberInInterval: number[] = getCommonMultiplesOfNNumbersInInterval(intervalStart, intervalEnd, multiplesOfArray);

        //Assert
        for (let i = 0; i < expectedCommonMultiplesOfNNumberInInterval.length; i++)
            expect(commonMultiplesOfNNumberInInterval[i]).toBe(expectedCommonMultiplesOfNNumberInInterval[i]);
    });

    test('testing for 4 to 12 and [NaN] result is []', () => {
        //Arrange
        const intervalStart: number = 4;
        const intervalEnd: number = 12;
        const multiplesOfArray: number[] = [NaN];
        const expectedCommonMultiplesOfNNumberInInterval: number[] = [];

        //Act
        let commonMultiplesOfNNumberInInterval: number[] = getCommonMultiplesOfNNumbersInInterval(intervalStart, intervalEnd, multiplesOfArray);

        //Assert
        for (let i = 0; i < expectedCommonMultiplesOfNNumberInInterval.length; i++)
            expect(commonMultiplesOfNNumberInInterval[i]).toBe(expectedCommonMultiplesOfNNumberInInterval[i]);
    });

    test('testing for 12 to 12 and [11] result is []', () => {
        //Arrange
        const intervalStart: number = 12;
        const intervalEnd: number = 12;
        const multiplesOfArray: number[] = [11];
        const expectedCommonMultiplesOfNNumberInInterval: number[] = [];

        //Act
        let commonMultiplesOfNNumberInInterval: number[] = getCommonMultiplesOfNNumbersInInterval(intervalStart, intervalEnd, multiplesOfArray);

        //Assert
        for (let i = 0; i < expectedCommonMultiplesOfNNumberInInterval.length; i++)
            expect(commonMultiplesOfNNumberInInterval[i]).toBe(expectedCommonMultiplesOfNNumberInInterval[i]);
    });

    test('For 4 to 12 and [] should throw error', () => {
        //Arrange
        const intervalStart: number = 4;
        const intervalEnd: number = 12;
        const multiplesOfArray: number[] = [];

        //Act

        //Assert
        expect(() => {
            getCommonMultiplesOfNNumbersInInterval(intervalStart, intervalEnd, multiplesOfArray);
        }).toThrow('Array must have at least one value');
    });
});