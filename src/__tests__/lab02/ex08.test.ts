import { getTempo } from "../../lab02/ex08";

describe('testar a função getTempo', () => {
    test('testar se 9600 segundos dá 02h40m00s', () => {
        //Arrange
        const tSegundos: number = 9600
        const expectedHoras: string = "São 2 horas 40 minutos 0 segundos.";

        //Act
        let horas: string = getTempo(tSegundos);

        //Assert
        expect(horas).toBe(expectedHoras);
    })

    test('testar se 1 segundo dá 00h00m01s', () => {
        //Arrange
        const tSegundos: number = 1
        const expectedHoras: string = "São 0 horas 0 minutos 1 segundos.";

        //Act
        let horas: string = getTempo(tSegundos);

        //Assert
        expect(horas).toBe(expectedHoras);
    })
});