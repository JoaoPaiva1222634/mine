import { EncapsulatedArray } from "../../lab05/ex01b";

//Testing ex01e
describe('testing getValueAccordingToIndex method', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([1, 2, 3, 4, 5]), index: 3, expectedResult: 4 },
        { array: new EncapsulatedArray([1, 2, 3, 4, 5]), index: 0, expectedResult: 1 },
        { array: new EncapsulatedArray([1, 2, 3, 4, 5]), index: 1, expectedResult: 2 }
    ];

    //Act
    test.each(happyPath)(
        'get the value indicated by the index',

        ({ array, index, expectedResult }) => {

            let result: number = array.getValueAccordingToIndex(index);

            //Assert
            expect(result).toBe(expectedResult);
        });


    //Arrange
    const evilPath = [
        { array: new EncapsulatedArray([]), index: 3, expectedResult: undefined },
        { array: new EncapsulatedArray([1, 2, 3]), index: 3, expectedResult: undefined }
    ];

    //Act
    test.each(evilPath)(
        'get the value indicated by the index',

        ({ array, index, expectedResult }) => {

            let result: number = array.getValueAccordingToIndex(index);

            //Assert
            expect(result).toBe(expectedResult);
        });
});