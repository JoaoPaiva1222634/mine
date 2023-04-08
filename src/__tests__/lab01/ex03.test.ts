import {vCilindro} from '../../lab01/ex03';

describe('testar a função vCilindro', () => {
    test('testar se para raio 3 e altura 5 o volume é igual 141.3', () => {

//Arrange
    const raio: number = 3;
    const altura: number = 5;
    const expectedVLitros: number = 141300;

//Act

    let vLitros: number = vCilindro (raio, altura);

//Assert

    expect(vLitros).toBe(expectedVLitros);
    });

})