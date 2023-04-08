/*
Implemente uma ou mais funções e respetivos testes que em conjunto permitam que
 dados dois números (X e Y) indique se um é múltiplo do outro, retornando,
 conforme o caso, uma das mensagens do tipo: X é múltiplo de Y ou Y é múltiplo
 de X ou X não é múltiplo nem divisor de Y.
*/


export function getMult(x: number, y: number): string {

    let resultado: string = "X não é múltiplo nem divisor de Y";

    if (x % y == 0) {
        resultado = "X é múltiplo de Y";
    } else {
        if (y % x == 0) {
            resultado = "Y é múltiplo de X"
        }

    }

    return resultado;
}