import { pRectangulo } from "../../lab01/ex04";

describe('testar função pRectangulo', () => {
    test('ver se comprimento 3 e largura 5 dá 8', () => {
    
    //Arrange
        const comprimento: number = 3;
        const largura: number = 5;
        const expectedPerimetro: number = 16;

    //Act
        let perimetro: number = pRectangulo(comprimento, largura);

    //Assert
        expect(perimetro).toBe(expectedPerimetro);

    });
});