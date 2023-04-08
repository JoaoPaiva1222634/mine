import { getVerCresc } from "../../lab02/ex11";

describe('test function getVerCresc', () => {
    test('test if for numero 100 is false', () => {
        //Arrange
        const numero: number = 100;
        const expectedResposta: boolean = false;

        //Act
        let resposta: boolean = getVerCresc(numero);

        //Assert
        expect(resposta).toBe(expectedResposta);

    });

    test('test if for numero 123 is true', () => {
        //Arrange
        const numero: number = 123;
        const expectedResposta: boolean = true;

        //Act
        let resposta: boolean = getVerCresc(numero);

        //Assert
        expect(resposta).toBe(expectedResposta);

    });

    test('test if for numero 423 is false', () => {
        //Arrange
        const numero: number = 423;
        const expectedResposta: boolean = false;

        //Act
        let resposta: boolean = getVerCresc(numero);

        //Assert
        expect(resposta).toBe(expectedResposta);

    });

    test('test if for numero 121 is false', () => {
        //Arrange
        const numero: number = 121;
        const expectedResposta: boolean = false;

        //Act
        let resposta: boolean = getVerCresc(numero);

        //Assert
        expect(resposta).toBe(expectedResposta);

    });

    test('test if for numero 122 is false', () => {
        //Arrange
        const numero: number = 122;
        const expectedResposta: boolean = false;

        //Act
        let resposta: boolean = getVerCresc(numero);

        //Assert
        expect(resposta).toBe(expectedResposta);

    });

    test('test if for numero 223 is false', () => {
        //Arrange
        const numero: number = 223;
        const expectedResposta: boolean = false;

        //Act
        let resposta: boolean = getVerCresc(numero);

        //Assert
        expect(resposta).toBe(expectedResposta);

    });

    test('test if for numero 321 is false', () => {
        //Arrange
        const numero: number = 321;
        const expectedResposta: boolean = false;

        //Act
        let resposta: boolean = getVerCresc(numero);

        //Assert
        expect(resposta).toBe(expectedResposta);

    });    

    test('if number doesnt have 3 digits should throw error', () => {
        expect(() => {
            getVerCresc(99);
        }).toThrow('Número tem de ter 3 dígitos');
    });

    test('if number doesnt have 3 digits should throw error', () => {
        expect(() => {
            getVerCresc(1000);
        }).toThrow('Número tem de ter 3 dígitos');
    });
});