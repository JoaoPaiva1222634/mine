/*
Desenvolva uma solução (métodos + testes) que a partir de cinco valores indicando as
distâncias diárias em milhas percorrida por um estafeta, durante uma semana de trabalho,
retorne a distância média diária em quilómetros. A conversão faz-se com base na fórmula: 1 Milha=1609 metros.
*/

export function getDistMedia(dia1: number, dia2: number, dia3: number, dia4: number, dia5: number): number {
    let distMedia = +(((dia1 + dia2 + dia3 + dia4 + dia5)/5) * 1.609).toFixed(3);
    return distMedia;
}