import { getFahrenheit } from "../../lab01/ex06";

describe('testar função getFahrenheit', () => {
    test('testar se 100 Celsius são 212 Fahrenheit', () => {
    
    //Arrange
        const tempCelsius: number = 100;
        const expectedFahrenheit: number = 212; 

    //Act
        let tempFahrenheit: number = getFahrenheit(tempCelsius);

    //Assert
        expect(tempFahrenheit).toBe(expectedFahrenheit);

    });
});