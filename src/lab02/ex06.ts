/*
Construa um algoritmo/método e respetivos testes que efetue o cálculo dos valores da seguinte função:

F(X) =   X se X < 0
         0 se x = 0
         x2 - 2x se x > 0
*/

/**
 * 
 * @param value valor de X
 * @returns 
 */

export function getCalcFunc(value: number): number {
    let calcFunc: number = 0;

    if (value <= 0) {
        calcFunc = value;
    } else {
        calcFunc = value ** 2 - 2 * value;
    }

    return calcFunc;
}