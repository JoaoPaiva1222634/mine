import { EncapsulatedArray } from "../../lab05/ex01b";


//Testing ex01b
describe('testing constructor', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: [] },
        { array: new EncapsulatedArray([1, 2, 3]), expectedResult: [1, 2, 3] },
        { array: new EncapsulatedArray([-1, -2, -3]), expectedResult: [-1, -2, -3] }
    ];

    //Act
    test.each(happyPath)(
        'encapsulate an array of numbers',

        ({ array, expectedResult }) => {

            let result: number[] = array.array;

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});


//Testing ex01c
describe('testing addNewElement method', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), newElement: 1, expectedResult: [1] },
        { array: new EncapsulatedArray([1, 2, 3]), newElement: 1, expectedResult: [1, 2, 3, 1] },
        { array: new EncapsulatedArray([-1, -2, -3]), newElement: 1, expectedResult: [-1, -2, -3, 1] }
    ];

    //Act
    test.each(happyPath)(
        'add a new element to the array',

        ({ array, newElement, expectedResult }) => {

            array.addNewElement(newElement);
            let result: number[] = array.array;

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });
});


//Testing ex01d
describe('testing removeFirstElementEqualToValue method', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([1, 3, 2, 3, 3]), value: 3, expectedResult: [1, 2, 3, 3] },
        { array: new EncapsulatedArray([1, 1, 2, 3]), value: 1, expectedResult: [1, 2, 3] },
        { array: new EncapsulatedArray([-1, -2, -3]), value: -1, expectedResult: [-2, -3] }
    ];

    //Act
    test.each(happyPath)(
        'remove the first element of the array equal to a value',

        ({ array, value, expectedResult }) => {

            array.removeFirstElementEqualToValue(value);
            let result: number[] = array.array;

            //Assert
            expect(result.length).toBe(expectedResult.length);
            for (let i = 0; i < result.length; i++)
                expect(result[i]).toBe(expectedResult[i]);
        });


    //Arrange
    const evilPath = [
        { array: new EncapsulatedArray([1,2,3]), value: 4, expectedResult: [1,2,3] },
        { array: new EncapsulatedArray([]), value: 3, expectedResult: [] }
    ];

    //Act
    test.each(evilPath)(
        'remove the first element of the array equal to a value',

        ({ array, value, expectedResult }) => {

            array.removeFirstElementEqualToValue(value)
            let result: number[] = array.array;

            //Assert
            expect(result.length).toBe(expectedResult.length);
        });
});


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

describe('testing ex01f', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), expectedResult: 0 },
        { array: new EncapsulatedArray([1]), expectedResult: 1 },
        { array: new EncapsulatedArray([1, 2, 3, 4]), expectedResult: 4 }

    ];

    //Act
    test.each(happyPath)(
        'get the number of elements of an array',

        ({ array, expectedResult }) => {

            let result: number = array.getNumberOfElementsOfArray();

            //Assert
            expect(result).toBe(expectedResult);
        });
});
