import { getDivis } from "../../lab02/ex04";

describe('testar a função getDivis', () => {

    test('testar se para 100 digito1 é 1', () => {

        //Arrange
        const numero: number = 100;
        const expectedDigito1: number = 1;

        //Act
        let digito1: number = getDivis(numero);

        //Assert
        expect(digito1).toBe(expectedDigito1);

    });

    test('testar se para 678 digito1 é 6', () => {

        //Arrange
        const numero: number = 678;
        const expectedDigito1: number = 6;

        //Act
        let digito1: number = getDivis(numero);

        //Assert
        expect(digito1).toBe(expectedDigito1);

    });

    test('testar se para 999 digito1 é 9', () => {

        //Arrange
            const numero: number = 999;
            const expectedDigito1: number = 9; 
    
        //Act
            let digito1: number = getDivis(numero);
    
        //Assert
            expect(digito1).toBe(expectedDigito1);
    
        });

    test('testar se para 78 digito1 é -1', () => {

        //Arrange
        const numero: number = 78;
        const expectedDigito1: number = -1;

        //Act
        let digito1: number = getDivis(numero);

        //Assert
        expect(digito1).toBe(expectedDigito1);

    });

    test('testar se para 1678 digito1 é -1', () => {

        //Arrange
        const numero: number = 1678;
        const expectedDigito1: number = -1;

        //Act
        let digito1: number = getDivis(numero);

        //Assert
        expect(digito1).toBe(expectedDigito1);

    });
});