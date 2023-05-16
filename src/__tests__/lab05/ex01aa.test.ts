import { EncapsulatedArray } from "../../lab05/ex01b";

describe('testing ex01aa', () => {

    //Arrange
    const happyPath = [
        { array: new EncapsulatedArray([]), entryArray: [], expectedResult: true },
        { array: new EncapsulatedArray([1]), entryArray: [2], expectedResult: false },
        { array: new EncapsulatedArray([12]), entryArray: [12], expectedResult: true },
        { array: new EncapsulatedArray([12]), entryArray: [12, 13], expectedResult: false },
        { array: new EncapsulatedArray([12, 23]), entryArray: [12], expectedResult: false },
        { array: new EncapsulatedArray([123, 157, 1679]), entryArray: [123, 157, 1679], expectedResult: true },
        { array: new EncapsulatedArray([10, 121, 342, 382]), entryArray: [10, 121, 342, 123], expectedResult: false },
        { array: new EncapsulatedArray([23, 379, 13, 471]), entryArray: [22, 379, 13, 471], expectedResult: false },
        { array: new EncapsulatedArray([8208, 177, 12379, 11]), entryArray: [12, 32, 65, 332], expectedResult: false }

    ];

    //Act
    test.each(happyPath)(
        'check if array is the same as one passed as a parameter',

        ({ array, entryArray, expectedResult }) => {

            let result: boolean = array.checkIfArrayIsTheSameAsEntryArray(entryArray);

            //Assert
            expect(result).toBe(expectedResult);
        });
});