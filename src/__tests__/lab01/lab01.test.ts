import {calculateGenderPercentage} from '../../lab01/lab01';
import {calculateBoysPercentage} from '../../lab01/lab01';
import {calculateGirlsPercentage} from '../../lab01/lab01';

describe('Testing the Calculate Gender Percentage algorithm', () => {
    test('6 boys and 9 girls should have a 0.4 boys percentage and 0.6 girls percentage', () => {
        //Arrange
        let boys: number = 6
        let girls: number = 9;
        let expectededBoysPercentage: number = 0.4;
        let expectededGirlsPercentage: number = 0.6;

        //Act
        let [boysPercentage, girlsPercentage] = calculateGenderPercentage(boys, girls);

        //Assert
        expect(boysPercentage).toBe(expectededBoysPercentage);
        expect(girlsPercentage).toBe(expectededGirlsPercentage);
        expect(boysPercentage + girlsPercentage).toBe(1);

    });

    test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateGenderPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });
});

describe('Testing the Calculate Boys\' Percentage algorithm', () => {
    test('6 boys and 9 girls should have a 0.4 boys percentage and 0.6 girls percentage', () => {
        //Arrange
        let boys: number = 6
        let girls: number = 9;
        let expectededBoysPercentage: number = 0.4;

        //Act
        let boysPercentage = calculateBoysPercentage(boys, girls);

        //Assert
        expect(boysPercentage).toBe(expectededBoysPercentage);

    });

    test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateBoysPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });
});

describe('Testing the Calculate Girls\' Percentage algorithm', () => {
    test('6 boys and 9 girls should have a 0.4 boys percentage and 0.6 girls percentage', () => {
        //Arrange
        let boys: number = 6
        let girls: number = 9;
        let expectededGirlsPercentage: number = 0.6;

        //Act
        let girlsPercentage = calculateGirlsPercentage(boys, girls);

        //Assert
        expect(girlsPercentage).toBe(expectededGirlsPercentage);

    });

    test('Zero number of boys and girls should raise an exception', () => {
        expect(() => {
            calculateGirlsPercentage(0, 0);
        }).toThrow('Boys and girls must not equal zero');
    });
});