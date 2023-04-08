import { getExchange } from "../../lab03/ex02";

describe('Testing getExchange.', () => {
    test('Exchanging 10 euros to "D" should return 15.34 dollars ', () => {
        //Arrange
        let euros: number = 10;
        let symbol: string= "D"
        let expectededResult: string= "Receberá 15.34 Dólar";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Exchanging 10 euros to "L" should return 7.74 libras ', () => {
        //Arrange
        let euros: number = 10;
        let symbol: string= "L"
        let expectededResult: string= "Receberá 7.74 Libra";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Exchanging 10 euros to "I" should return 1.614.8 Iene ', () => {
        //Arrange
        let euros: number = 10;
        let symbol: string= "I"
        let expectededResult: string= "Receberá 1614.8 Iene";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Exchanging 10 euros to "C" should return 95.93 Corao Sueca', () => {
        //Arrange
        let euros: number = 10;
        let symbol: string= "C"
        let expectededResult: string= "Receberá 95.93 Coroa Sueca";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Exchanging 10 euros to "F" should return 16.01 Franco Suiço ', () => {
        //Arrange
        let euros: number = 10;
        let symbol: string= "F"
        let expectededResult: string= "Receberá 16.01 Franco Suiço";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Exchanging 10 euros to "L" should return 7.74 libras ', () => {
        //Arrange
        let euros: number = 10;
        let symbol: string= "L"
        let expectededResult: string= "Receberá 7.74 Libra";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Exchanging 0 euros to "L" should return 0 libras ', () => {
        //Arrange
        let euros: number = 0;
        let symbol: string= "L"
        let expectededResult: string= "Receberá 0 Libra";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Exchanging 1 euros to "L" should return 0.774 libras ', () => {
        //Arrange
        let euros: number = 1;
        let symbol: string= "L"
        let expectededResult: string= "Receberá 0.774 Libra";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Exchanging 0 euros to "F" should return 0 Franco Suiço ', () => {
        //Arrange
        let euros: number = 0;
        let symbol: string= "F"
        let expectededResult: string= "Receberá 0 Franco Suiço";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });

    test('Exchanging 1 euros to "F" should return 1.601 Franco Suiço ', () => {
        //Arrange
        let euros: number = 1;
        let symbol: string= "F"
        let expectededResult: string= "Receberá 1.601 Franco Suiço";

        //Act
        let functionResult = getExchange(euros, symbol);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});
