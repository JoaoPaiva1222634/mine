import { getAlturaEdificio } from "../../lab01/ex11";

describe('testar função getAlturaEdificio', () => {
    test('testar se quando velocidade inicial é 0 e tempo da queda é 2 o resultado é 19.6', () => {

        //Arrange
        const v0: number = 0;
        const t: number = 2;
        const expectedAlturaEdificio: number = 19.6;

        //Act
        let alturaEdificio = getAlturaEdificio(v0, t);

        //Assert
        expect(alturaEdificio).toBe(expectedAlturaEdificio);

    });

    test('testar se quando velocidade inicial é 0 e tempo da queda é 0 o resultado é 0', () => {

        //Arrange
        const v0: number = 0;
        const t: number = 0;
        const expectedAlturaEdificio: number = 0;

        //Act
        let alturaEdificio = getAlturaEdificio(v0, t);

        //Assert
        expect(alturaEdificio).toBe(expectedAlturaEdificio);

    });

    test('testar se quando velocidade inicial é 0 e tempo da queda é 2 o resultado é 19.6', () => {

        //Arrange
        const v0: number = 1;
        const t:number = 2;
        const expectedAlturaEdificio: number = 21.6;

        //Act
        let alturaEdificio = getAlturaEdificio(v0, t);

        //Assert
        expect(alturaEdificio).toBe(expectedAlturaEdificio);

    });

    test('velocidade inicial negativa deve dar erro', () => {
        expect(() => {
            getAlturaEdificio(-1, 2);
        }).toThrow('Usar apenas valores positivos');
    });

    test('intervalo de tempo negativo deve dar erro', () => {
        expect(() => {
            getAlturaEdificio(2, -1);
        }).toThrow('Usar apenas valores positivos');
    });

});