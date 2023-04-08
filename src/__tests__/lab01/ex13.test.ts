import { getAngRad, getDistOp } from "../../lab01/ex13";

describe('testar função getDistOp', () => {
    test('testar se para alturaA 40m, alturaB 60m e angulo 60º a distância é 52.907', () => {

    //Arrange
        const a: number = 40;
        const b: number = 60;
        const aGrau: number = 60;
        const expectedDistOp: number = 52.907;

    //Act
        let distOp: number = getDistOp(a, b, aGrau);

    //Assert
        expect(distOp).toBe(expectedDistOp);

    });
});

describe('testar a função getAngRad', () => {
    test('testar se 60º são 1.047 radianos', () => {

    //Arrange
        const aGrau: number = 60;
        const expectedARad: number = 1.047;

    //Act
        let aRad: number = getAngRad(aGrau);

    //Assert
        expect(aRad).toBe(expectedARad);

    });
});