import { getNotaBol } from '../../lab02/ex02'

describe('testar a função getNotaBol', () => {

    test('testar se nota 0 retorna falso', () => {

        //Arrange
        const nota: number = 0;
        const expectedNota: boolean = false;

        //Act
        let resultado: boolean = getNotaBol(nota);

        //Assert
        expect(resultado).toBe(expectedNota);

    });
    
    test('testar se nota 6 retorna falso', () => {

        //Arrange
        const nota: number = 6;
        const expectedNota: boolean = false;

        //Act
        let resultado: boolean = getNotaBol(nota);

        //Assert
        expect(resultado).toBe(expectedNota);

    });

    test('testar se nota 8 retorna verdadeiro', () => {

        //Arrange
        const nota: number = 8;
        const expectedNota: boolean = true;

        //Act
        let resultado: boolean = getNotaBol(nota);

        //Assert
        expect(resultado).toBe(expectedNota);

    });

    test('testar se nota 9 retorna verdadeiro', () => {

        //Arrange
        const nota: number = 9;
        const expectedNota: boolean = true;

        //Act
        let resultado: boolean = getNotaBol(nota);

        //Assert
        expect(resultado).toBe(expectedNota);

    });

    test('nota abaixo de 0 tem de dar erro', () => {

        expect(() => {
            getNotaBol(-1);
        }).toThrow('A nota não pode ter um valor negativo');
    });
});


