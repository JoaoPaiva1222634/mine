import { getClassif } from "../../lab03/ex04";

describe('testing function getClassif', () => {
    test('testing if for 20 is Muito Bom', () => {
        //Arrange
        const grade: number = 20;
        const expectedGradeQ: string = "Muito Bom";

        //Act
        let gradeQ: string = getClassif(grade);

        //Assert
        expect(gradeQ).toBe(expectedGradeQ);
    })

    test('testing if for 17 is Bom', () => {
        //Arrange
        const grade: number = 17;
        const expectedGradeQ: string = "Bom";

        //Act
        let gradeQ: string = getClassif(grade);

        //Assert
        expect(gradeQ).toBe(expectedGradeQ);
    })

    test('testing if for 13 is Suficiente', () => {
        //Arrange
        const grade: number = 13;
        const expectedGradeQ: string = "Suficiente";

        //Act
        let gradeQ: string = getClassif(grade);

        //Assert
        expect(gradeQ).toBe(expectedGradeQ);
    })

    test('testing if for 9 is Medíocre', () => {
        //Arrange
        const grade: number = 9;
        const expectedGradeQ: string = "Medíocre";

        //Act
        let gradeQ: string = getClassif(grade);

        //Assert
        expect(gradeQ).toBe(expectedGradeQ);
    })

    test('testing if for 4 is Mau', () => {
        //Arrange
        const grade: number = 4;
        const expectedGradeQ: string = "Mau";

        //Act
        let gradeQ: string = getClassif(grade);

        //Assert
        expect(gradeQ).toBe(expectedGradeQ);
    })

    test('testing if for 4 is Mau', () => {
        //Arrange
        const grade: number = 0;
        const expectedGradeQ: string = "Mau";

        //Act
        let gradeQ: string = getClassif(grade);

        //Assert
        expect(gradeQ).toBe(expectedGradeQ);
    })

    test('grades below 0 should throw error', () => {
        expect(() => {
            getClassif(-1);
        }).toThrow('Insert grade between 0 and 20');
    });

    test('grades above 20 should throw error', () => {
        expect(() => {
            getClassif(21);
        }).toThrow('Insert grade between 0 and 20');
    });
})