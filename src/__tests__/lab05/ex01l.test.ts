import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01l', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), numberX: 0, expectedResult: NaN },
        { array: new EncapsulatedArray([1]), numberX: 2, expectedResult: NaN },
        { array: new EncapsulatedArray([1, 1, 1, 1, 2]), numberX: 2, expectedResult: 2 },
        { array: new EncapsulatedArray([4, 1, 1, 2]), numberX: 2, expectedResult: 3 },
        { array: new EncapsulatedArray([4, 3, 5, 6]), numberX: 3, expectedResult: 4.5 }

    ];

    //Act
    test.each(happyPath)(
        'get the average value of the elements that are multiple of a given number in an array',

        ({ array, numberX, expectedResult }) => {

            let result: number = array.getAverageOfAllMultiplesOfGivenNumber(numberX);

            //Assert
            expect(result).toBe(expectedResult);
        });
});