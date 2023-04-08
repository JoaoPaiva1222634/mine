import { getTurma } from "../../lab02/ex13";

describe('test function getTurma', () => {
    test('less than zero should be Valor Inválido', () => {
        //Arrange
        const aprovados: number = -1;
        const expectedResultado: string = "Valor Inválido";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);

    });

    test('more than 1 should be Valor Inválido', () => {
        //Arrange
        const aprovados: number = 2;
        const expectedResultado: string = "Valor Inválido";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });

    test('0 should be Turma Má', () => {
        //Arrange
        const aprovados: number = 0;
        const expectedResultado: string = "Turma Má";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });

    test('less than 0.2 should be Turma Má', () => {
        //Arrange
        const aprovados: number = 0.1;
        const expectedResultado: string = "Turma Má";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });

    test('0.2 should be Turma Fraca', () => {
        //Arrange
        const aprovados: number = 0.2;
        const expectedResultado: string = "Turma Fraca";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });

    test('less than 0.5 should be Turma Fraca', () => {
        //Arrange
        const aprovados: number = 0.4;
        const expectedResultado: string = "Turma Fraca";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });

    test('0.5 should be Turma Razoável', () => {
        //Arrange
        const aprovados: number = 0.5;
        const expectedResultado: string = "Turma Razoável";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });

    test('less than 0.7 should be Turma Razoável', () => {
        //Arrange
        const aprovados: number = 0.6;
        const expectedResultado: string = "Turma Razoável";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });

    test('0.7 should be Turma Boa', () => {
        //Arrange
        const aprovados: number = 0.7;
        const expectedResultado: string = "Turma Boa";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);

    });

    test('less than 0.9 should be Turma Boa', () => {
        //Arrange
        const aprovados: number = 0.8;
        const expectedResultado: string = "Turma Boa";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });

    test('0.9 should be Turma Excelente', () => {
        //Arrange
        const aprovados: number = 0.9;
        const expectedResultado: string = "Turma Excelente";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });

    test('1 should be Turma Excelente', () => {
        //Arrange
        const aprovados: number = 1;
        const expectedResultado: string = "Turma Excelente";

        //Act
        let resultado: string = getTurma(aprovados);

        //Assert
        expect(resultado).toBe(expectedResultado);
        
    });
});