import { getDistMedia } from "../../lab02/ex16";

describe('testing function getDistMedia', () => {
    test('testing if for (4,3,5,6,4) average is 7.08', () => {
        //Arrange
        const dia1: number = 4;
        const dia2: number = 3;
        const dia3: number = 5;
        const dia4: number = 6;
        const dia5: number = 4;
        const expectedDistMedia: number = 7.08;

        //Act
        let distMedia: number = getDistMedia(dia1, dia2, dia3, dia4, dia5);

        //Assert
        expect(distMedia).toBe(expectedDistMedia);

    })
});