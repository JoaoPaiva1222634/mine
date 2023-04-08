import { getPrSald } from "../../lab02/ex12";

describe('teste para calculo dos descontos', () => {
    test('preco 200 tem de ser menos 40% do valor dado', () => {
        //Arrange
        let preco: number = 200;
        let expectedPrSaldo: number = 120;

        //Act
        let prSaldo: number = getPrSald(preco);

        //Assert
        expect(prSaldo).toBe(expectedPrSaldo);

    });

    test('preco 220 tem de ser menos 60% do valor dado', () => {
        //Arrange
        let preco: number = 220;
        let expectedPrSaldo: number = 88;

        //Act
        let prSaldo: number = getPrSald(preco);

        //Assert
        expect(prSaldo).toBe(expectedPrSaldo);
    });

    test('preco 100 tem de ser menos 30% do valor dado', () => {
        //Arrange
        let preco: number = 100;
        let expectedPrSaldo: number = 70;

        //Act
        let prSaldo: number = getPrSald(preco);

        //Assert
        expect(prSaldo).toBe(expectedPrSaldo);
    });

    test('preco 150 tem de ser menos 40% do valor dado', () => {
        //Arrange
        let preco: number = 150;
        let expectedPrSaldo: number = 90;

        //Act
        let prSaldo: number = getPrSald(preco);

        //Assert
        expect(prSaldo).toBe(expectedPrSaldo);
    });

    test('resultado entre 50 e 100 valor tem de ser menos 30% do valor dado', () => {
        //Arrange
        let preco: number = 70;
        let expectedPrSaldo: number = 49;

        //Act
        let prSaldo: number = getPrSald(preco);

        //Assert
        expect(prSaldo).toBe(expectedPrSaldo);
    });

    test('preco 50 tem de ser menos 20% do valor dado', () => {
        //Arrange
        let preco: number = 50;
        let expectedPrSaldo: number = 40;

        //Act
        let prSaldo: number = getPrSald(preco);

        //Assert
        expect(prSaldo).toBe(expectedPrSaldo);
    });

    test('resultado entre 0 e 50 valor tem de ser menos 20% do valor dado', () => {
        //Arrange
        let preco: number = 30;
        let expectedPrSaldo: number = 24;

        //Act
        let prSaldo: number = getPrSald(preco);

        //Assert
        expect(prSaldo).toBe(expectedPrSaldo);
    });

    test('preco de 0 tem de dar erro', () => {

        expect(() => {
            getPrSald(0);
        }).toThrow('Introduza um preço válido');
    });
    
    test('preco abaixo de 0 tem de dar erro', () => {

        expect(() => {
            getPrSald(-1);
        }).toThrow('Introduza um preço válido');
    });
});