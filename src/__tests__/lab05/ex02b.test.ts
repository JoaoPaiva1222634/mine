import { EncapsulatedArray } from "../../lab05/ex01b";
import { EncapsulatedMatrix } from "../../lab05/ex02b";

describe('testing ex02b', () => {

    //Arrange
    const happyPath = [
        { matrix: new EncapsulatedMatrix([[]]), expectedResult: [[]] },
        { matrix: new EncapsulatedMatrix([[1]]), expectedResult: [[1]] },
        { matrix: new EncapsulatedMatrix([[1, 2], [3, 4], [5]]), expectedResult: [[1, 2], [3, 4], [5]] },
        { matrix: new EncapsulatedMatrix([[1, 2, 7], [3, 4, 8], [5, 3, 9]]), expectedResult: [[1, 2, 7], [3, 4, 8], [5, 3, 9]] },
        { matrix: new EncapsulatedMatrix([[1, 2, 3], [3, 4, 5]]), expectedResult: [[1, 2, 3], [3, 4, 5]] }
    ];

    //Act
    test.each(happyPath)(
        'encapsulate a matrix of integer numbers',

        ({ matrix, expectedResult }) => {

            matrix.matrix;
            let result: EncapsulatedArray[] = matrix.matrix;

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let row = 0; row < result.length; row++) {
                expect(result[row].getNumberOfElementsOfArray()).toBe(expectedResult[row].length)
                for (let column = 0; column < expectedResult[row].length; column++) {
                    expect(result[row].getValueAccordingToIndex(column)).toBe(expectedResult[row][column])
                }
            }
        });
});