import { getWeeklySalary } from "../../lab02/ex20";

describe('testing function getSalario', () => {
    test('testing if for 0h salary is 0', () => {
        //Arrange
        const hours: number = 0;
        const expectedWeeklySalary: number = 0;

        //Act
        let weeklySalary: number = getWeeklySalary(hours);

        //Assert
        expect(weeklySalary).toBe(expectedWeeklySalary);
    });

    test('testing if for 36h salary is 270', () => {
        //Arrange
        const hours: number = 36;
        const expectedWeeklySalary: number = 270;

        //Act
        let weeklySalary: number = getWeeklySalary(hours);

        //Assert
        expect(weeklySalary).toBe(expectedWeeklySalary);
    });

    test('testing if for 38h salary is 290', () => {
        //Arrange
        const horas: number = 38;
        const expectedSalarioFinal: number = 290;

        //Act
        let salarioFinal: number = getWeeklySalary(horas);

        //Assert
        expect(salarioFinal).toBe(expectedSalarioFinal);
    });

    test('testing if for 41h salary is 320', () => {
        //Arrange
        const horas: number = 41;
        const expectedSalarioFinal: number = 320;

        //Act
        let salarioFinal: number = getWeeklySalary(horas);

        //Assert
        expect(salarioFinal).toBe(expectedSalarioFinal);
    });

    test('testing if for 45h salary is 380', () => {
        //Arrange
        const horas: number = 45;
        const expectedSalarioFinal: number = 380;

        //Act
        let salarioFinal: number = getWeeklySalary(horas);

        //Assert
        expect(salarioFinal).toBe(expectedSalarioFinal);
    });

    test('total de rapazes e raparigas for zero deve haver erro', () => {
        expect(() => {
            getWeeklySalary(-1);
        }).toThrow('Hours must not be negative');
    });
});