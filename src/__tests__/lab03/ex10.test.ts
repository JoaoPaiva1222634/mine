import { getMonthlySalary } from "../../lab03/ex10";

describe('testing function getMonthlySalary', () => {
    test('testing for baseSalary 100 and overtime 0 is 100', () => {
        //Arrange
        const baseSalary: number = 100;
        const overtime: number = 0;
        const expectedMonthlySalary: number = 100;

        //Act
        let monthlySalary: number = getMonthlySalary(baseSalary, overtime);

        //Assert
        expect(monthlySalary).toBe(expectedMonthlySalary);
    });

    test('testing for baseSalary 0 and overtime 100 is 0', () => {
        //Arrange
        const baseSalary: number = 0;
        const overtime: number = 100;
        const expectedMonthlySalary: number = 0;

        //Act
        let monthlySalary: number = getMonthlySalary(baseSalary, overtime);

        //Assert
        expect(monthlySalary).toBe(expectedMonthlySalary);
    });

    test('testing for baseSalary 1 and overtime 0 is 1', () => {
        //Arrange
        const baseSalary: number = 1;
        const overtime: number = 0;
        const expectedMonthlySalary: number = 1;

        //Act
        let monthlySalary: number = getMonthlySalary(baseSalary, overtime);

        //Assert
        expect(monthlySalary).toBe(expectedMonthlySalary);
    });

    test('testing for baseSalary 250 and overtime 3 is 265', () => {
        //Arrange
        const baseSalary: number = 250;
        const overtime: number = 3;
        const expectedMonthlySalary: number = 265;

        //Act
        let monthlySalary: number = getMonthlySalary(baseSalary, overtime);

        //Assert
        expect(monthlySalary).toBe(expectedMonthlySalary);
    });
});