import { getLowestNumberOfMatrix } from "../lab04/ex17a"

describe('get the smallest element of a matrix', () => {
    //Arrange

    const validTestData = [
        { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expectedResult: 1 },
        { matrix: [[1, -2, 3], [4, 5], [7, -8, 9]], expectedResult: -8 },
        { matrix: [[1, -2], [4, -5]], expectedResult: -5 },
        { matrix: [[-1], [4]], expectedResult: -1 },
        { matrix: [[1, 2], [4, 5], [7, 8, 9]], expectedResult: 1 }
    ];

    //Act
    test.each(validTestData)(
        'get the smallest element of a matrix',

        ({ matrix, expectedResult }) => {

            let result: number = getLowestNumberOfMatrix(matrix);

            //Assert
            expect(result).toBe(expectedResult);
        });

    //Arrange

    const invalidTestData = [
        { matrix: [], expectedError: 'Matrix is empty' }
    ];

    test.each(invalidTestData)(
        'should throw error',
        ({ matrix, expectedError }) => {

            //Assert

            expect(() => {
                getLowestNumberOfMatrix(matrix);
            }).toThrow(expectedError);
        });
});