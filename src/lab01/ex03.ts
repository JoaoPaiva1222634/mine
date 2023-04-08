/**
 * 
 * @param raio recebe o valor do raio
 * @param altura recebe o valor da altura
 * @returns retorna o valor do volume do cilindro
 */

export function vCilindro(raio: number, altura: number): number {
    const pi: number = 3.14;
    let area: number = pi * raio ** 2;
    let volume: number = area * altura;
    let vLitros: number = volume * 1000;
    return vLitros;
}