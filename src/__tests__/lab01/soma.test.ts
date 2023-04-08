import { soma } from '../../lab01/soma';

describe('testar função soma', () => {
    test('testar se somar 3 rapazes com 5 raparigas dá 8', () => {

        //Arrange
        const nRapazes: number = 3;
        const nRaparigas: number = 5;
        const expectedRes: number = 8;

        //Act

        let res: number = soma(nRapazes, nRaparigas);

        //Assert

        expect(res).toBe(expectedRes);
    });

    test('testar se somar 0 rapazes com 5 raparigas dá 5', () => {

        //Arrange
        const nRapazes: number = 0;
        const nRaparigas: number = 5;
        const expectedRes: number = 5;

        //Act

        let res: number = soma(nRapazes, nRaparigas);

        //Assert

        expect(res).toBe(expectedRes);
    });

})