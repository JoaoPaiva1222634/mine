import { getConvertSeg } from "../../lab02/ex18";
import { getConvertHoras } from "../../lab02/ex18";
import { getDia } from "../../lab02/ex18";
import { getFinal } from "../../lab02/ex18";

describe('testing function getConvertSeg', () => {
    test('testing if for 1h 2m result is 3720s', () => {
        //Arrange
        const horas: number = 1;
        const minutos: number = 2;
        const expectedSegundos: number = 3720;

        //Act
        let segundos: number = getConvertSeg(horas, minutos);

        //Assert
        expect(segundos).toBe(expectedSegundos);
    });

    test('testing if for 0h 2m result is 120s', () => {
        //Arrange
        const horas: number = 0;
        const minutos: number = 2;
        const expectedSegundos: number = 120;

        //Act
        let segundos: number = getConvertSeg(horas, minutos);

        //Assert
        expect(segundos).toBe(expectedSegundos);
    });

    test('testing if for 3h 1m result is 10800s', () => {
        //Arrange
        const horas: number = 3;
        const minutos: number = 0;
        const expectedSegundos: number = 10800;

        //Act
        let segundos: number = getConvertSeg(horas, minutos);

        //Assert
        expect(segundos).toBe(expectedSegundos);
    });

    test('testing if for 3h 1m result is 10860s', () => {
        //Arrange
        const horas: number = 3;
        const minutos: number = 1;
        const expectedSegundos: number = 10860;

        //Act
        let segundos: number = getConvertSeg(horas, minutos);

        //Assert
        expect(segundos).toBe(expectedSegundos);
    });
});

describe('testing function getConvertHoras', () => {
    test('testing a if 3600 is 1h 0m', () => {
        //Arrange
        const segundos: number = 3600;
        const expectedHConvertido: number = 1;

        //Act
        let convertido: [number, number] = getConvertHoras(segundos);
        let hConvertido: number = convertido[0];


        //Assert
        expect(hConvertido).toBe(expectedHConvertido);

    });

    test('testing b if 3600 is 1h 0m', () => {
        //Arrange
        const segundos: number = 3600;
        const expectedMConvertido: number = 0;

        //Act
        let convertido: [number, number] = getConvertHoras(segundos);
        let mConvertido: number = convertido[1];


        //Assert
        expect(mConvertido).toBe(expectedMConvertido);

    });

    test('testing a if 60 is 0h 1m', () => {
        //Arrange
        const segundos: number = 60;
        const expectedHConvertido: number = 0;

        //Act
        let convertido: [number, number] = getConvertHoras(segundos);
        let hConvertido: number = convertido[0];


        //Assert
        expect(hConvertido).toBe(expectedHConvertido);

    });

    test('testing b if 60 is 0h 1m', () => {
        //Arrange
        const segundos: number = 60;
        const expectedMConvertido: number = 1;

        //Act
        let convertido: [number, number] = getConvertHoras(segundos);
        let mConvertido: number = convertido[1];


        //Assert
        expect(mConvertido).toBe(expectedMConvertido);

    });

    test('testing a if 0s is 0h 0m', () => {
        //Arrange
        const segundos: number = 0;
        const expectedMConvertido: number = 0;

        //Act
        let convertido: [number, number] = getConvertHoras(segundos);
        let mConvertido: number = convertido[0];


        //Assert
        expect(mConvertido).toBe(expectedMConvertido);

    });

    test('testing b if 0s is 0h 0m', () => {
        //Arrange
        const segundos: number = 0;
        const expectedMConvertido: number = 0;

        //Act
        let convertido: [number, number] = getConvertHoras(segundos);
        let mConvertido: number = convertido[1];


        //Assert
        expect(mConvertido).toBe(expectedMConvertido);

    });
});

describe('testing function getDia', () => {
    test('testing for < 24h', () => {
        //Arrange
        const hConvertido: number = 8;
        const mConvertido: number = 23;
        const expectedDia: string = `O comboio chegará no próprio dia às ${hConvertido}:${mConvertido}.`;

        //Act
        let dia: string = getDia(hConvertido, mConvertido);

        //Assert
        expect(dia).toBe(expectedDia);
    })

    test('testing for 24h', () => {
        //Arrange
        const hConvertido: number = 24;
        const mConvertido: number = 23;
        const expectedDia: string = `O comboio chegará no próprio dia às ${hConvertido}:${mConvertido}.`;

        //Act
        let dia: string = getDia(hConvertido, mConvertido);

        //Assert
        expect(dia).toBe(expectedDia);
    })

    test('testing for > 24', () => {
        //Arrange
        const hConvertido: number = 28;
        const mConvertido: number = 23;
        const hFinal: number = hConvertido - 24;
        const expectedDia: string = `O comboio chegará no dia seguinte às ${hFinal}:${mConvertido}.`;

        //Act
        let dia: string = getDia(hConvertido, mConvertido);

        //Assert
        expect(dia).toBe(expectedDia);
    })
});

describe('testing function getFinal', () => {
    test('testing for 1h0m and 0h23m', () => {
        //Arrrange
        const hPartida: number = 1;
        const mPartida: number = 0;
        const dHoras: number = 0;
        const dMinutos: number = 23;
        const expectedChegadaDia: string = "O comboio chegará no próprio dia às 1:23.";

        //Act
        let chegadaDia: string = getFinal(hPartida, mPartida, dHoras, dMinutos);

        //Assert
        expect(chegadaDia).toBe(expectedChegadaDia);
    });
});