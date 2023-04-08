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

    test('for 50 should be 3.0414093201713376e+64', ()=> {
        const num:number = 50;
        const expectedRes: number = 3.0414093201713376e+64;

        //Act
        let res: number = getFactorial(num);

        //Assert
        expect(res).toBe(expectedRes);
    });

    test('negative should throw error', () => {
        expect(() => {
            getFactorial(-1);
        }).toThrow('number must be a positive integer no bigger than 50');
    });

    test('decimals should throw error', () => {
        expect(() => {
            getFactorial(0.5);
        }).toThrow('number must be a positive integer no bigger than 50');
    });

    test('bigger than 50 should throw error', () => {
        expect(() => {
            getFactorial(51);
        }).toThrow('number must be a positive integer no bigger than 50');
    });
});