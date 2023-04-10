import { getFactorial } from "../../lab03/ex01";

describe('testing function getAlg', () => {
    test('for 0 should be 1', ()=> {
        const num:number = 0;
        const expectedRes: number = 1;

        //Act
        let res: number = getFactorial(num);

        //Assert
        expect(res).toBe(expectedRes);
    });

    test('for 1 should be 1', ()=> {
        const num:number = 1;
        const expectedRes: number = 1;

        //Act
        let res: number = getFactorial(num);

        //Assert
        expect(res).toBe(expectedRes);
    });

    test('for 18 should be 6402373705728000', ()=> {
        const num:number = 18;
        const expectedRes: number = 6402373705728000;

        //Act
        let res: number = getFactorial(num);

        //Assert
        expect(res).toBe(expectedRes);
    });

    test('negative should throw error', () => {
        expect(() => {
            getFactorial(-1);
        }).toThrow('number must be a positive integer no bigger than 18');
    });

    test('decimals should throw error', () => {
        expect(() => {
            getFactorial(0.5);
        }).toThrow('number must be a positive integer no bigger than 18');
    });

    test('bigger than 50 should throw error', () => {
        expect(() => {
            getFactorial(19);
        }).toThrow('number must be a positive integer no bigger than 18');
    });
});