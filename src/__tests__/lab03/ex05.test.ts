import { calculateNetSalary } from "../../lab03/ex05";

describe('Testing the net salary.', () => {
    test('Given a gross salary of 1000 the expected result should be 850', () => {
        //Arrange
        let grossSalary: number = 1000;
        let expectededResult: number= 850;

        //Act
        let functionResult = calculateNetSalary(grossSalary);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given a gross salary of 500 the expected result should be 450', () => {
        //Arrange
        let grossSalary: number = 500;
        let expectededResult: number= 450;

        //Act
        let functionResult = calculateNetSalary(grossSalary);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given a gross salary of 1500 the expected result should be 1200', () => {
        //Arrange
        let grossSalary: number = 1500;
        let expectededResult: number= 1200;

        //Act
        let functionResult = calculateNetSalary(grossSalary);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
    test('Given a gross salary of 0 the expected result should be 0', () => {
        //Arrange
        let grossSalary: number = 0;
        let expectededResult: number= 0;

        //Act
        let functionResult = calculateNetSalary(grossSalary);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Given a gross salary of 1 the expected result should be ', () => {
        //Arrange
        let grossSalary: number = 1;
        let expectededResult: number= 0.9;

        //Act
        let functionResult = calculateNetSalary(grossSalary);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
})