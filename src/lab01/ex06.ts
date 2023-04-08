/*
Escreva um algoritmo que converta uma temperatura em graus Celsius para a temperatura equivalente em graus Fahrenheit, sabendo que:
Fahrenheit = 32 + (9 / 5) x Celsius
*/

export function getFahrenheit (tempCelsius: number): number {
    let tempFahrenheit = 32 + (9 / 5) * tempCelsius;

    return tempFahrenheit;
}