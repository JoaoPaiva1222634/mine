import { getCustoFinal } from "../../lab02/ex17";
import { getCustoTinta } from "../../lab02/ex17";
import { getNumeroPintores } from "../../lab02/ex17";

describe('testing function getCustoTinta', () => {
    test('testing if for custoLitro = 5, rendLitro = 10 and area = 100 result is 50', () => {

        //Arrange
        const custoLitro: number = 5;
        const rendLitro: number = 10;
        const area: number = 100;
        const expectedCustoTinta: number = 50;

        //Act
        let custoTinta: number = getCustoTinta(custoLitro, rendLitro, area);

        //Assert
        expect(custoTinta).toBe(expectedCustoTinta);

    });
});

describe('testing function getNumeroPintores', () => {
    test('testing if for area = 90 needs 1 painter', () => {

        //Arrange
        const area: number = 90;
        const expectedNumeroPintores: number = 1;

        //Act
        let numeroPintores: number = getNumeroPintores(area);

        //Assert
        expect(numeroPintores).toBe(expectedNumeroPintores);

    });

    test('testing if for area = 100 needs 2 painters', () => {

        //Arrange
        const area: number = 100;
        const expectedNumeroPintores: number = 2;

        //Act
        let numeroPintores: number = getNumeroPintores(area);

        //Assert
        expect(numeroPintores).toBe(expectedNumeroPintores);

    });

    test('testing if for area = 300 needs 3 painters', () => {

        //Arrange
        const area: number = 300;
        const expectedNumeroPintores: number = 3;

        //Act
        let numeroPintores: number = getNumeroPintores(area);

        //Assert
        expect(numeroPintores).toBe(expectedNumeroPintores);

    });

    test('testing if for area = 1000 needs 4 painters', () => {

        //Arrange
        const area: number = 1000;
        const expectedNumeroPintores: number = 4;

        //Act
        let numeroPintores: number = getNumeroPintores(area);

        //Assert
        expect(numeroPintores).toBe(expectedNumeroPintores);

    });

    test('Area = 0 must throw error', () => {
        expect(() => {
            getNumeroPintores(0);
        }).toThrow('Area tem de ser maior que zero')
    });

    test('Area < 0 must throw error', () => {
        expect(() => {
            getNumeroPintores(-1);
        }).toThrow('Area tem de ser maior que zero')
    });
});

    describe('testing function getCustoFinal', () => {
        test('testing if for custoLitro = 5, rendLitro = 10, area = 100 and salario = 40 result is 300', () => {

            //Arrange
            const custoLitro: number = 5;
            const rendLitro: number = 10;
            const area: number = 100;
            const salario: number = 40;
            const expectedCustoFinal: number = 300;

            //Act
            let custoFinal: number = getCustoFinal(custoLitro, rendLitro, area, salario);

            //Assert
            expect(custoFinal).toBe(expectedCustoFinal);

        });
    });