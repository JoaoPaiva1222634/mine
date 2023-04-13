import { checkIfCcNumberIsValid } from "../../lab03/ex15";

describe('testing function checkIfCcNumberIsValid', () => {
    test('testing if for correct number is true', () => {
        //Arrange
        const idNumber: number = 12612371;
        const checkNumber: number = 3;
        const expectedResult: boolean = true;

        //Act
        let result: boolean = checkIfCcNumberIsValid(idNumber, checkNumber);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('testing if for incorrect number is false', () => {
        //Arrange
        const idNumber: number = 12612372;
        const checkNumber: number = 3;
        const expectedResult: boolean = false;

        //Act
        let result: boolean = checkIfCcNumberIsValid(idNumber, checkNumber);

        //Assert
        expect(result).toBe(expectedResult);
    });

    test('For values not above 0 should throw error', () => {
        expect(() => {
            checkIfCcNumberIsValid(1234567, 2);
        }).toThrow('ID Number must have 8 digits');
    });
});