import { separateEvenAndOddNumbers } from "../../lab03/ex16alt";

describe('testing function separateEvenAndOddNumbers', () => {
    test('testing if for correct number is true', () => {
        //Arrange
        const numberSequence: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expectedResult: number[][] = [[1, 3, 5, 7, 9], [2, 4, 6, 8]];

        //Act
        let result: number[][] = separateEvenAndOddNumbers(numberSequence);

        //Assert
        for (let i = 0; i < expectedResult.length; i++) {
            expect(result[0][i]).toBe(expectedResult[0][i]);
        }
        for (let i = 0; i < expectedResult.length; i++) {
            expect(result[1][i]).toBe(expectedResult[1][i]);
        }
    });

    test('testing if for correct number is true', () => {
        //Arrange
        const numberSequence: number[] = [1, 3, 5, 7, 9];
        const expectedResult: number[][] = [[1, 3, 5, 7, 9], []];

        //Act
        let result: number[][] = separateEvenAndOddNumbers(numberSequence);

        //Assert
        for (let i = 0; i < expectedResult.length; i++) {
            expect(result[0][i]).toBe(expectedResult[0][i]);
        }
        for (let i = 0; i < expectedResult.length; i++) {
            expect(result[1][i]).toBe(expectedResult[1][i]);
        }
    });
});