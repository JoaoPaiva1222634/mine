import { getSaudacao } from "../../lab02/ex09";

describe('testar a função getSaudacao', () => {
    test('testar se para 0 segundos da boa noite', () => {
        //Arrange
        const segundos: number = 0;
        const expectedSaudacao: string = "Boa noite";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 10 segundos da boa noite', () => {
        //Arrange
        const segundos: number = 10;
        const expectedSaudacao: string = "Boa noite";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 21600 segundos da boa noite', () => {
        //Arrange
        const segundos: number = 21600;
        const expectedSaudacao: string = "Boa noite";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 72001 segundos da boa noite', () => {
        //Arrange
        const segundos: number = 72001;
        const expectedSaudacao: string = "Boa noite";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 75000 segundos da boa noite', () => {
        //Arrange
        const segundos: number = 75000;
        const expectedSaudacao: string = "Boa noite";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 84600 segundos da boa noite', () => {
        //Arrange
        const segundos: number = 84600;
        const expectedSaudacao: string = "Boa noite";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 43201 segundos da boa tarde', () => {
        //Arrange
        const segundos: number = 43201;
        const expectedSaudacao: string = "Boa tarde";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 50000 segundos da boa tarde', () => {
        //Arrange
        const segundos: number = 50000;
        const expectedSaudacao: string = "Boa tarde";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 72000 segundos da boa tarde', () => {
        //Arrange
        const segundos: number = 72000;
        const expectedSaudacao: string = "Boa tarde";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 21601 segundos da bom dia', () => {
        //Arrange
        const segundos: number = 21601;
        const expectedSaudacao: string = "Bom dia";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 25000 segundos da bom dia', () => {
        //Arrange
        const segundos: number = 25000;
        const expectedSaudacao: string = "Bom dia";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('testar se para 43200 segundos da bom dia', () => {
        //Arrange
        const segundos: number = 43200;
        const expectedSaudacao: string = "Bom dia";

        //Act
        let saudacao: string = getSaudacao(segundos);

        //Assert
        expect(saudacao).toBe(expectedSaudacao);

    })

    test('valores negativos deve dar erro', () => {
        expect(() => {
            getSaudacao(-1);
        }).toThrow('Introduza um valor compreendido entre as 24h de um dia!');
    });

    test('valores acima de 24h deve dar erro', () => {
        expect(() => {
            getSaudacao(86401);
        }).toThrow('Introduza um valor compreendido entre as 24h de um dia!');
    });
})