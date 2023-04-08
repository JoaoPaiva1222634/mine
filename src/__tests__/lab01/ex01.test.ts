import { getPercent } from "../../lab01/ex01";

describe('Testing getPercent', () => {
    test('verificar resultado quando rapazes 12 e raparigas 18', () => {

        //Arrange
            const nRapazes: number = 12;
            const nRaparigas: number = 18;
            const expectedPercRapazes: number = 0.4;
            const expectedPercRaparigas: number = 0.6;

        //Act
            let [percRapaz, percRapariga] = getPercent(nRapazes, nRaparigas);

        //Assert
            expect(percRapaz).toBe(expectedPercRapazes);
            expect(percRapariga).toBe(expectedPercRaparigas);
            expect(percRapaz + percRapariga).toBe(1);

    });

    test('total de rapazes e raparigas for zero deve haver erro', () => {
        expect(() => {
            getPercent(0,0);
        }).toThrow('Total de rapazes e raparigas não pode ser zero');
    });
})