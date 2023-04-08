import { getAltEd } from "../../lab01/ex12";

describe('testar a função getAltEd', () => {
    test('sombra do edificio 40, sombra da pessoa 4 e altura da pessoa 2 dá uma altura do edificio 20', () => {

        //Arrange
        const sombEd: number = 40;
        const sombPes: number = 4;
        const altPes: number = 2;
        const expectedAltEd: number = 20;

        //Act
        let altEd: number = getAltEd(sombEd, sombPes, altPes);

        //Assert
        expect(altEd).toBe(expectedAltEd);

    });

    test('sombra do edificio 0, sombra da pessoa 4 e altura da pessoa 2 dá uma altura do edificio 20', () => {

        //Arrange
        const sombEd: number = 0;
        const sombPes: number = 4;
        const altPes: number = 2;
        const expectedAltEd: number = 0;

        //Act
        let altEd: number = getAltEd(sombEd, sombPes, altPes);

        //Assert
        expect(altEd).toBe(expectedAltEd);

    });

    test('sombra do edificio 40, sombra da pessoa 4 e altura da pessoa 2 dá uma altura do edificio 0', () => {

        //Arrange
        const sombEd: number = 40;
        const sombPes: number = 4;
        const altPes: number = 0;
        const expectedAltEd: number = 0;

        //Act
        let altEd: number = getAltEd(sombEd, sombPes, altPes);

        //Assert
        expect(altEd).toBe(expectedAltEd);

    });

    test('valores negativos devem dar erro', () => {
        expect(() => {
            getAltEd(-1, 2, 4);
        }).toThrow('Usar apenas valores positivos e a sombra da pessoa não pode ser 0');
    });

    test('valores negativos devem dar erro', () => {
        expect(() => {
            ;
            getAltEd(2, -1, 4);
        }).toThrow('Usar apenas valores positivos e a sombra da pessoa não pode ser 0');
    });

    test('valores negativos devem dar erro', () => {
        expect(() => {
            getAltEd(2, 4, -1);
        }).toThrow('Usar apenas valores positivos e a sombra da pessoa não pode ser 0');
    });

    test('se a sombra da pessoa for 0 deve dar erro', () => {
        expect(() => {
            getAltEd(2, 0, 4);
        }).toThrow('Usar apenas valores positivos e a sombra da pessoa não pode ser 0');
    });
});