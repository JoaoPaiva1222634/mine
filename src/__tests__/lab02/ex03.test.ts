import { getDistancia } from "../../lab02/ex03";

describe('testar a função getDistancia', () => {
    test('testar se com as cordenadas (2,1) e (5,7) a distância é 6.708', () => {

    //Arrange
        const x1: number = 2;
        const y1: number = 1;
        const x2: number = 5;
        const y2: number = 7;
        const expectedDistancia: number = 6.708;

    //Act
        let distancia: number = getDistancia(x1,x2,y1,y2);

    //Assert
        expect(distancia).toBe(expectedDistancia);

    })
})