import { preco } from "../../lab01/ex02";

describe ('testar função preco', () => {
    test('verificar resultado para 5 rosas a 3 e 7 tulipas a 2', () => {

    //Arrange
        const nRosas: number = 5;
        const pRosas: number = 3;
        const nTulipas: number = 7;
        const pTulipas: number = 2;
        const expectedPreco: number = 29;

    //Act
        let total = preco(nRosas, nTulipas, pRosas, pTulipas);

    //Assert
        expect(total).toBe(expectedPreco);

    });
});