import { getCalcFunc } from "../../lab02/ex06";

describe('testar a função getCalcFunc', () => {
    test('testar se quando X é -3 retorna -3', () => {

        //Arrange
        const x: number = -3;
        const expectedCalcFunc: number = -3;

        //Act
        let calcFunc: number = getCalcFunc(x);

        //Assert
        expect(calcFunc).toBe(expectedCalcFunc);

    })

    test('testar se quando X = 0 retorna 0', () => {

        //Arrange
        const x: number = 0;
        const expectedCalcFunc: number = 0;

        //Act
        let calcFunc: number = getCalcFunc(x);

        //Assert
        expect(calcFunc).toBe(expectedCalcFunc);

    })

    test('testar se quando X é 1 retorna -1', () => {

        //Arrange
        const x: number = 1;
        const expectedCalcFunc: number = -1;

        //Act
        let calcFunc: number = getCalcFunc(x);

        //Assert
        expect(calcFunc).toBe(expectedCalcFunc);

    })

    test('testar se quando X é 2 retorna 0', () => {

        //Arrange
        const x: number = 2;
        const expectedCalcFunc: number = 0;

        //Act
        let calcFunc: number = getCalcFunc(x);

        //Assert
        expect(calcFunc).toBe(expectedCalcFunc);

    })

    test('testar se quando X é 3 retorna 3', () => {

        //Arrange
        const x: number = 3;
        const expectedCalcFunc: number = 3;

        //Act
        let calcFunc: number = getCalcFunc(x);

        //Assert
        expect(calcFunc).toBe(expectedCalcFunc);

    })
});