import { getMult } from "../../lab02/ex10";

describe('testing function getMult', () => {
    test('testing if Y is multiple of X for X = 2 and Y = 4', () => {
        //Arrange

        const x = 2;
        const y = 4;
        const expectedResult = "Y é múltiplo de X";

        //Act

        let result: string = getMult(x, y);

        //Assert

        expect(result).toBe(expectedResult);
    });

    test('testing if X is a multiple of Y for X = 4 e Y = 2', () => {
        //Arrange

        const x = 4;
        const y = 2;
        const expectedResult: string = "X é múltiplo de Y";

        //Act

        let result: string = getMult(x, y);

        //Assert

        expect(result).toStrictEqual(expectedResult);
    });

    test('testing if X is neither multiple nor divider of Y for X = 3 e Y = 4', () => {
        //Arrange

        const x = 3;
        const y = 4;
        const expectedResult: string = "X não é múltiplo nem divisor de Y";

        //Act

        let result: string = getMult(x, y);

        //Assert

        expect(result).toStrictEqual(expectedResult);
    });

});