import { getClassCubo } from "../../lab02/ex07";
import { getVol } from "../../lab02/ex07";
import { getClass } from "../../lab02/ex07";

describe('testar a função getClassCubo', () => {
    test('testar se para uma área de 5 o volume é Pequeno', () => {

        //Arrange
        const area: number = 5;
        const expectedClassCubo: string = "Pequeno"

        //Act
        let classCubo: string = getClassCubo(area);

        //Assert
        expect(classCubo).toBe(expectedClassCubo);

    });

    test('testar se para uma área de 8 o volume é Médio', () => {

        //Arrange
        const area: number = 8;
        const expectedClassCubo: string = "Médio"

        //Act
        let classCubo: string = getClassCubo(area);

        //Assert
        expect(classCubo).toBe(expectedClassCubo);

    });

    test('testar se para uma área de 10 o volume é Grande', () => {

        //Arrange
        const area: number = 10;
        const expectedClassCubo: string = "Grande"

        //Act
        let classCubo: string = getClassCubo(area);

        //Assert
        expect(classCubo).toBe(expectedClassCubo);

    });
});

describe('testar a função getVol', () => {

    test('testar se para area = 0 volume é -1', () => {

        //Arrange
        const area: number = 0;
        const expectedVolume: number = -1;

        //Act
        let volume: number = getVol(area);

        //Assert
        expect(volume).toBe(expectedVolume);

    });

    test('testar se para area < 0 volume é -1', () => {

        //Arrange
        const area: number = -1;
        const expectedVolume: number = -1;

        //Act
        let volume: number = getVol(area);

        //Assert
        expect(volume).toBe(expectedVolume);

    });

    test('testar se para area 5 volume é 0.7607257743127308', () => {

        //Arrange
        const area: number = 5;
        const expectedVolume: number = 0.7607257743127308;

        //Act
        let volume: number = getVol(area);

        //Assert
        expect(volume).toBe(expectedVolume);

    });
});

describe('testar a função getClass', () => {
    test('testar se para volume 0.5 a classif é Pequeno', () => {
        //Arrange
        const volume: number = 0.5;
        const expectedClass: string = "Pequeno";

        //Act
        let classif: string = getClass(volume);

        //Assert
        expect(classif).toBe(expectedClass);
    })

    test('testar se para volume 1 a classif é Pequeno', () => {
        //Arrange
        const volume: number = 1;
        const expectedClass: string = "Pequeno";

        //Act
        let classif: string = getClass(volume);

        //Assert
        expect(classif).toBe(expectedClass);
    })

    test('testar se para volume 1.5 a classif é Médio', () => {
        //Arrange
        const volume: number = 1.5;
        const expectedClass: string = "Médio";

        //Act
        let classif: string = getClass(volume);

        //Assert
        expect(classif).toBe(expectedClass);
    })

    test('testar se para volume 2 a classif é Médio', () => {
        //Arrange
        const volume: number = 2;
        const expectedClass: string = "Médio";

        //Act
        let classif: string = getClass(volume);

        //Assert
        expect(classif).toBe(expectedClass);
    })

    test('testar se para volume 3 a classif é Grande', () => {
        //Arrange
        const volume: number = 3;
        const expectedClass: string = "Grande";

        //Act
        let classif: string = getClass(volume);

        //Assert
        expect(classif).toBe(expectedClass);
    })

    test('total de rapazes e raparigas for zero deve haver erro', () => {
        expect(() => {
            getClass(-1);
        }).toThrow('Area tem de ser maior que zero');
    });
})