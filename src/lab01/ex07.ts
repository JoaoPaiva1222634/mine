/*
Escreva um algoritmo que a partir de dois números inteiros, H e M, que representam
horas e minutos, respetivamente, calcule o número de minutos passados desde as 0H.
*/

export function getMinPas(horas: number, minutos: number): number {
    let minPas: number = horas * 60 + minutos;

    return minPas;
}