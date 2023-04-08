import { getThunder2 } from "../../lab01/ex08";

describe('testar a função getThunder2', () => {
    test('testar se para 5000 metros o relâmpago caiu há 14.71 segundos', () => {

        //Arrange
        const x: number = 5000;
        const unidade: string = "m";
        const expectedFormula: number = 14.71;

        //Act
        let formula: number = getThunder2(x, unidade);

        //Assert
        expect(formula).toBe(expectedFormula);

    });


    test('testar se para 3 segundos o relâmpago caiu a 1020 metros', () => {

        //Arrange
        const x: number = 3;
        const unidade: string = "s";
        const expectedFormula: number = 1020;

        //Act
        let formula: number = getThunder2(x, unidade);

        //Assert
        expect(formula).toBe(expectedFormula);

    });

    test('qualquer unidade diferente de "s" ou "m" deve dar erro', () => {
        expect(() => {
            getThunder2(5000,"a");
        }).toThrow('A função apenas aceita metros ou segundos!');
    });
});
