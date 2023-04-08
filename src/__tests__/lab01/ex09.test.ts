import { getTempoSeg } from "../../lab01/ex09";

describe('testar função getTempoSeg', () => {
    test('testar se 4 horas 2 minutos e 10 segundos são 14530 segundos', () => {

    //Arrange
        const horas: number = 4;
        const minutos: number = 2;
        const segundos: number = 10;
        const expectedTempManuelSeg: number = 14530;

    //Act
        let tempoManuelSeg = getTempoSeg(horas, minutos, segundos);

    //Assert
        expect(tempoManuelSeg).toBe(expectedTempManuelSeg);

    });

    test('testar se 1 hora 5 minutos e 0 segundos são 3900 segundos', () => {

        //Arrange
            const horas: number = 1;
            const minutos: number = 5;
            const segundos: number = 0;
            const expectedTempZeSeg: number = 3900;
    
        //Act
            let tempoZeSeg = getTempoSeg(horas, minutos, segundos);
    
        //Assert
            expect(tempoZeSeg).toBe(expectedTempZeSeg);
    
        });
});

import { getDistPercZe } from "../../lab01/ex09";

describe('testar a função getDistPercZe', () => {
    test('testar se a distância percorrida do Zé foram 11395 metros', () => {
    
    //Arrange
        const distManuel: number = 42195;
        const horasManuel: number = 4;
        const minutosManuel: number = 2;
        const segundosManuel: number = 10;
        const horasZe: number = 1;
        const minutosZe: number = 5;
        const segundosZe: number = 0;
        const expectedDistPercZe: number = 11;

    //Act
        let distPercZe: number = getDistPercZe(distManuel, horasManuel, minutosManuel, segundosManuel, horasZe, minutosZe, segundosZe);

    //Assert
        expect(distPercZe).toBe(expectedDistPercZe);

    });
});