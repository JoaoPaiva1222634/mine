import { getNotif } from "../../lab02/ex14";

describe('testing getNotif function', () => {
    test('for indice 0 should be Todas as indústrias podem proceder com as suas actividades', () => {
        //Arrange
        const indice: number = 0;
        const expectedNotif: string = "Todas as indústrias podem proceder com as suas actividades"

        //Act
        let notif: string = getNotif(indice);
        
        //Assert
        expect(notif).toBe(expectedNotif);
    });

    test('for indice 0.3 should be Todas as indústrias podem proceder com as suas actividades', () => {
        //Arrange
        const indice: number = 0.3;
        const expectedNotif: string = "Todas as indústrias podem proceder com as suas actividades"

        //Act
        let notif: string = getNotif(indice);
        
        //Assert
        expect(notif).toBe(expectedNotif);
    });

    test('for indice 0.4 should be As indústria do 1º grupo deverão interromper as suas actividades', () => {
        //Arrange
        const indice: number = 0.4;
        const expectedNotif: string = "As indústria do 1º grupo deverão interromper as suas actividades"

        //Act
        let notif: string = getNotif(indice);
        
        //Assert
        expect(notif).toBe(expectedNotif);
    });

    test('for indice 0.5 should be As indústrias do 1º e 2º grupo deverão interromper as suas actividades', () => {
        //Arrange
        const indice: number = 0.5;
        const expectedNotif: string = "As indústrias do 1º e 2º grupo deverão interromper as suas actividades"

        //Act
        let notif: string = getNotif(indice);
        
        //Assert
        expect(notif).toBe(expectedNotif);
    });

    test('for indice more than 0.5 should be Todas as indústrias deverão interromper as suas actividades', () => {
        //Arrange
        const indice: number = 0.6;
        const expectedNotif: string = "Todas as indústrias deverão interromper as suas actividades"

        //Act
        let notif: string = getNotif(indice);
        
        //Assert
        expect(notif).toBe(expectedNotif);
    });

    test('negative indice should throw error', () => {
        expect(() => {
            getNotif(-1);
        }).toThrow('Valor não pode ser negativo');
    });
});