import { getPar } from "../../lab02/ex05";

describe('testar a função getPar', () => {
    test('testar se 8 dá true', () => {
    
    //Arrange
        const numero: number = 8;
        const expectedResultado: boolean = true;

    //Act
        let resultado: boolean = getPar(numero);

    //Assert
        expect(resultado).toBe(expectedResultado);

    });

    test('testar se 11 dá false', () => {
    
        //Arrange
            const numero: number = 11;
            const expectedResultado: boolean = false;
    
        //Act
            let resultado: boolean = getPar(numero);
    
        //Assert
            expect(resultado).toBe(expectedResultado);
    
        });
});