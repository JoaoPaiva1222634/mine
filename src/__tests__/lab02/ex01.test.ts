import { getMedPesada } from "../../lab02/ex01";

describe('medPesada', () => {
    test('testar se o resultado bate certo', () => {

//Arrange
    const nota1: number = 10;
    const nota2: number = 15;
    const nota3: number = 9;
    const peso1: number = 20;
    const peso2: number = 40;
    const peso3: number = 40;
    const expectedMedPesada: number = 11.6;

//Act

    let media: number = getMedPesada (nota1, nota2, nota3, peso1, peso2, peso3);

//Assert

    expect(media).toBe(expectedMedPesada);
    });

})