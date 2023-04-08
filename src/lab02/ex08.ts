/*
Construa uma função e respetivos testes que dado um tempo em segundos de um determinado
momento do dia, devolva-o no formato “horas : minutos : segundos” correspondente.

22h17m23s  sao 80243 segundos
*/


export function getTempo (tSegundos: number): string {
    let horas: number = Math.trunc(tSegundos / 3600);
    let minutos: number = Math.trunc((tSegundos % 3600) / 60);
    let segundos: number = (tSegundos % 3600) % 60;

    return `São ${horas} horas ${minutos} minutos ${segundos} segundos.`;
}