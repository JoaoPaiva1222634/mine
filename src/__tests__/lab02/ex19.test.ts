import { getFimProc } from "../../lab02/ex19";
import { getInicioSeg } from "../../lab02/ex19";
import { getConvertHMS } from "../../lab02/ex19";

describe('testing function getFimProc', () => {
    test('testing if result for (1,23,45,700) is', () => {
        //Arrange
        const inicioHoras: number = 1;
        const inicioMinutos: number = 23;
        const inicioSegundos: number = 45;
        const duracao: number = 700;
        const expectedResult: string = "O processamento terminará às 1:35:25"

        //Act
        let result: string = getFimProc(inicioHoras, inicioMinutos, inicioSegundos, duracao);

        //Assert
        expect(result).toBe(expectedResult);
    })
});

describe('testing function getInicioSeg', () => {
    test('testing if for (1,23,45) result is 5025 seconds)', () => {
        //Arrange
        const horas: number = 1;
        const minutos: number = 23;
        const segundos: number = 45;
        const expectedInicioConvert: number = 5025;

        //Act
        let inicioConvert: number = getInicioSeg(horas, minutos, segundos);

        //Assert 
        expect(inicioConvert).toBe(expectedInicioConvert);
    });

    test('testing if for (0,23,45) result is 1425 seconds)', () => {
        //Arrange
        const horas: number = 0;
        const minutos: number = 23;
        const segundos: number = 45;
        const expectedInicioConvert: number = 1425;

        //Act
        let inicioConvert: number = getInicioSeg(horas, minutos, segundos);

        //Assert 
        expect(inicioConvert).toBe(expectedInicioConvert);
    });

    test('testing if for (1,0,45) result is 3645 seconds)', () => {
        //Arrange
        const horas: number = 1;
        const minutos: number = 0;
        const segundos: number = 45;
        const expectedInicioConvert: number = 3645;

        //Act
        let inicioConvert: number = getInicioSeg(horas, minutos, segundos);

        //Assert 
        expect(inicioConvert).toBe(expectedInicioConvert);
    });

    test('testing if for (1,23,0) result is 3645 seconds)', () => {
        //Arrange
        const horas: number = 1;
        const minutos: number = 23;
        const segundos: number = 0;
        const expectedInicioConvert: number = 4980;

        //Act
        let inicioConvert: number = getInicioSeg(horas, minutos, segundos);

        //Assert 
        expect(inicioConvert).toBe(expectedInicioConvert);
    });
});

describe('testing function getConvertHMS', () => {
    test('testing if for 3645 seconds resul is 1h...', () => {
        //Arrange
        const totalSegundos: number = 3645;
        const expectedConvertHoras: number = 1;

        //Act
        let convertHMS: [number, number, number] = getConvertHMS(totalSegundos);
        let horas: number = convertHMS[0];

        //Assert
        expect(horas).toBe(expectedConvertHoras);
    });

    test('testing if for 3645 seconds result is 0m...', () => {
        //Arrange
        const totalSegundos: number = 3645;
        const expectedConvertMinutos: number = 0;

        //Act
        let convertHMS: [number, number , number] = getConvertHMS(totalSegundos);
        let minutos: number = convertHMS[1];

        //Assert
        expect(minutos).toBe(expectedConvertMinutos);
    });

    test('testing if for 3645 seconds resul is ...45s', () => {
        //Arrange
        const totalSegundos: number = 3645;
        const expectedConvertSegundos: number = 45;

        //Act
        let convertHMS: [number, number, number] = getConvertHMS(totalSegundos);
        let segundos: number = convertHMS[2];

        //Assert
        expect(segundos).toBe(expectedConvertSegundos);
    });

    test('testing if for 1425 result is 0h...)', () => {
        //Arrange
        const totalSegundos: number = 1425;
        const expectedConvertHoras: number = 0;

        //Act
        let convertHMS: [number, number, number] = getConvertHMS(totalSegundos);
        let horas: number = convertHMS[0];

        //Assert
        expect(horas).toBe(expectedConvertHoras);
    });

    test('testing if for 4980 result is 0s...)', () => {
        //Arrange
        const totalSegundos: number = 4980;
        const expectedConvertSegundos: number = 0;

        //Act
        let convertHMS: [number, number, number] = getConvertHMS(totalSegundos);
        let segundos: number = convertHMS[2];

        //Assert
        expect(segundos).toBe(expectedConvertSegundos);
    });
});