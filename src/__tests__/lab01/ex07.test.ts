import { getMinPas } from "../../lab01/ex07";

describe('testar a função getMinPas', () => {
    test('testar se 3 horas e 37 minutos devolve 217 minutos', () => {
    
    //Arrange
        const horas: number = 3;
        const minutos: number = 37;
        const expectedMinPas: number = 217;

    //Act
        let minPas: number = getMinPas(horas, minutos);

    //Assert
        expect(minPas).toBe(expectedMinPas);

    });
});