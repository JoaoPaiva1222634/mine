import { hipotenusa } from "../../lab01/ex05";

describe('testar função hipotenusa', () => {
    test('testar se quando cateto1 é 4 e cateto2 é 3 hipotenusa é 5', () => {
    
    //Arrange
        const cateto1: number = 4;
        const cateto2: number = 3;
        const expectedHipotenusa: number = 5; 

    //Act
        let hip: number = hipotenusa(cateto1, cateto2);

    //Assert
        expect(hip).toBe(expectedHipotenusa);

    });
});