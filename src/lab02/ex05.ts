/*
Crie uma função que devolva True se o número analisado for par.
*/


export function getPar(numero: number): boolean {
    let par: number = numero / 2;
    let resultado: boolean;

    if (Math.trunc(par) == par) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}