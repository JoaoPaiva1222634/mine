import { checkIfNumberIsPalindromeLab04 } from "../../lab04/ex12";

describe('testing function checkIfNumberIsPalindromeLab04', () => {
    test('testing if for 33 is true', () => {
        //Arrange
        const value: number = 33;
        const expectedResult: boolean = true;

        //Act
        let result: boolean = checkIfNumberIsPalindromeLab04(value);

        //Assert
        expect(result).toBe(expectedResult);
    });
});