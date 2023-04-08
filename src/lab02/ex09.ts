/*
Cria uma função, que com base no número de segundos de um determinado dia devolva a
saudação adequada ao momento conforme a informação seguinte:
“Bom dia” “Boa tarde” “Boa noite”
se [ 06h0m01s; 12h0m00s [ se [ 12h0m01s; 20h0m00s [ se [ 20h0m1s; 06h0m0s [
*/


export function getSaudacao(segundos: number): string {

    if (segundos < 0 || segundos >= 86401)
        throw new RangeError('Introduza um valor compreendido entre as 24h de um dia!');

    let saudacao: string = "Boa noite";

    if (segundos > 21600 && segundos < 43201) {
        saudacao = "Bom dia";
    } else if (segundos >= 43201 && segundos < 72001) {
        saudacao = "Boa tarde";
    }

    return saudacao;
}