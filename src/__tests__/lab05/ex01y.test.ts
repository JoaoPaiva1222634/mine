import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01y', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([1]), expectedResult: [] },
        { array: new EncapsulatedArray([12]), expectedResult: [12] },
        { array: new EncapsulatedArray([1, 153, 1634]), expectedResult: [] },
        { array: new EncapsulatedArray([10, 123, 345, 382]), expectedResult: [10, 123, 345, 382] },
        { array: new EncapsulatedArray([22, 370, 135, 407]), expectedResult: [22, 135] },
        { array: new EncapsulatedArray([8208, 177, 371, 11]), expectedResult: [177, 11] }

    ];

    //Act
    test.each(happyPath)(
        'return the elements that are not armstrong numbers',

        ({ array, expectedResult }) => {

            let result: number[] = array.getElementsThatAreNotArmstrongNumbers();

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });


    //Arrange
    const pathOfDoom = [
        { array: new EncapsulatedArray([]), expectedError: 'Number must be integer' },
        { array: new EncapsulatedArray([1.2, 4, 5]), expectedError: 'Number must be integer' }
    ]

    //Act
    test.each(pathOfDoom)(
        'should throw error',
        ({ array, expectedError }) => {

            //Assert
            expect(() => {
                array.getElementsThatAreNotArmstrongNumbers();
            }).toThrow(expectedError);
        });
});