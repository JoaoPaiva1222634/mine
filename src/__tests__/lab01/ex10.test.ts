import { getExpr } from "../../lab01/ex10";

describe('testar a função getExpr', () => {
    test('testar a função com x igual 7', () => {

    //Arrange
        const x: number = 7;
        const experctedExpr: number = 29;

    //Act
        let expr: number = getExpr(x);

    //Assert
        expect(expr).toBe(experctedExpr);

    })
})