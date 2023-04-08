import { getCustoJard } from "../../lab02/ex15";

describe('testing getCustoJardim function', () => {
    test('testing if price for (20, 3, 8) is 410.56', () => {
        //Arrange
        const area: number = 20;
        const nArvores: number = 3;
        const nArbustos: number = 8;
        const expectedCustoJard: number = 410.56;

        //Act
        let custoJard: number = getCustoJard(area,nArvores,nArbustos);

        //Assert
        expect(custoJard).toBe(expectedCustoJard);
    });

    test('testing if price for (20, 0, 8) is 345.56', () => {
        //Arrange
        const area: number = 20;
        const nArvores: number = 0;
        const nArbustos: number = 8;
        const expectedCustoJard: number = 345.56;

        //Act
        let custoJard: number = getCustoJard(area,nArvores,nArbustos);

        //Assert
        expect(custoJard).toBe(expectedCustoJard);
    });

    test('testing if price for (20, 3, 0) is 281.67', () => {
        //Arrange
        const area: number = 20;
        const nArvores: number = 3;
        const nArbustos: number = 0;
        const expectedCustoJard: number = 281.67;

        //Act
        let custoJard: number = getCustoJard(area,nArvores,nArbustos);

        //Assert
        expect(custoJard).toBe(expectedCustoJard);
    });

    test('If area is 0 should trow error', () => {
        expect(() => {
            getCustoJard(0,3,8);
        }).toThrow('Apenas valores positivos e a área tem de ser maior que 0');
    });

    test('Negative values should trow error', () => {
        expect(() => {
            getCustoJard(-1,-1,-1);
        }).toThrow('Apenas valores positivos e a área tem de ser maior que 0');
    });

    test('Negative values should trow error', () => {
        expect(() => {
            getCustoJard(2,-2,3);
        }).toThrow('Apenas valores positivos e a área tem de ser maior que 0');
    });

    test('Negative values should trow error', () => {
        expect(() => {
            getCustoJard(2,2,-1);
        }).toThrow('Apenas valores positivos e a área tem de ser maior que 0');
    });

});