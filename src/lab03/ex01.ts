/*
ED: res, num, x INTEIRO
ALG
INÍCIO
      res ← 1
      PARA (x ← num ATE 1  PASSO -1) FAZER
            res ← res * x
      FIMPARA
      DEVOLVER res
FIM
*/

export function getFactorial(num: number): number {
    if (num < 0 || Number.isInteger(num) == false || num > 50)
        throw new RangeError('number must be a positive integer no bigger than 50');

    let res: number = 1;

    for (let i = num; i > 1; i--) {
        res = res * i;
    }

    return res;
};