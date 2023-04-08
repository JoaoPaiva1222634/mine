import { getNumberOfMultiples } from "../../lab03/ex06a";

describe('testing getNumberOfMultiples function', () => {
    test('testing for 5 to 36 is 11', () => {
        //Arrange
        const intervalStart: number = 1;
        const intervalEnd: number = 36;
        const expectedNumberOfMultiples: number = 12;

        //Act
        let numberOfMultiples: number = getNumberOfMultiples(intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    })

    test('testing for 0 to 36 is 12', () => {
        //Arrange
        const intervalStart: number = 0;
        const intervalEnd: number = 36;
        const expectedNumberOfMultiples: number = 12;

        //Act
        let numberOfMultiples: number = getNumberOfMultiples(intervalStart, intervalEnd);

        //Assert
        expect(numberOfMultiples).toBe(expectedNumberOfMultiples);
    })

    test('testing if negative intervalStart throws error', () => {
        expect(() => {
            getNumberOfMultiples(-1, 37);
        }).toThrow('Start must be bigger than 0');
    });
});