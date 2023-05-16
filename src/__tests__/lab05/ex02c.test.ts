import { EncapsulatedArray } from "../../lab05/ex01b";
import { EncapsulatedMatrix } from "../../lab05/ex02b";

describe('testing ex02c', () => {

    //Arrange
    const happyPath = [
        { matrix: new EncapsulatedMatrix([[]]), newElement: 0, rowIndex: 0, expectedResult: [[0]] },
        { matrix: new EncapsulatedMatrix([[1]]), newElement: 2, rowIndex: 0, expectedResult: [[1, 2]] },
        { matrix: new EncapsulatedMatrix([[1, 2], [3, 4], [5]]), newElement: 6, rowIndex: 2, expectedResult: [[1, 2], [3, 4], [5, 6]] },
        { matrix: new EncapsulatedMatrix([[1, 2, 7], [3, 4, 8], [5, 3, 9]]), newElement: 0, rowIndex: 2, expectedResult: [[1, 2, 7], [3, 4, 8], [5, 3, 9, 0]] },
        { matrix: new EncapsulatedMatrix([[1, 2, 3], [3, 4, 5]]), newElement: 77, rowIndex: 1, expectedResult: [[1, 2, 3], [3, 4, 5, 77]] }
    ];

    //Act
    test.each(happyPath)(
        'add a new element to the matrix',

        ({ matrix, newElement, rowIndex, expectedResult }) => {

            matrix.addNewElementToMatrix(newElement, rowIndex)
            let result: EncapsulatedArray[] = matrix.matrix

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