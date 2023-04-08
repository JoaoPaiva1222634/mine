/*
Construa uma solução (métodos + testes) que dado um número de três dígitos
(centenas, dezenas e unidades), verifique se a sequência dos algarismos é ou não crescente.
*/


export function getVerCresc(numero: number): boolean {
    if (numero < 100 || numero >=1000)
        throw new RangeError ('Número tem de ter 3 dígitos');

    let digito1: number = (Math.trunc((numero / 100))) % 10;
    let digito2: number = (Math.trunc((numero / 10))) % 10;
    let digito3: number = numero % 10;
    let resposta: boolean;

    if (digito3 > digito2 && digito2 > digito1) {
        resposta = true;
    } else {
        resposta = false;
    }

    return resposta;
}