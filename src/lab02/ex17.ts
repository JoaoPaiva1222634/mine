/*
Construa uma ou mais funções e respetivos testes que em conjunto permitam determinar
o custo da pintura de um edifício, contabilizando tinta e mão-de-obra.
Será fornecida a área do edifício, o custo do litro da tinta a utilizar e o respetivo
rendimento do litro, isto é, a área que se consegue pintar com um litro dessa tinta e o salário/dia de um pintor.

Considere a seguinte informação:
• Cada pintor trabalha 8 horas por dia e o seu rendimento é de 2 m2/hora;
• O número de pintores necessários é determinado a partir da seguinte tabela:

Entre 0 e 100 m2 exclusive 1
De 100 a 300 m2 exclusive 2
De 300 a 1000 m2 exclusive 3
Acima de 1000 m2 4
*/

export function getCustoFinal(custoLitro: number, rendLitro: number, area: number, salario: number): number {
    let custoTinta: number = getCustoTinta(custoLitro, rendLitro, area);
    let numeroPintores: number = getNumeroPintores(area);
    let dias: number = area / numeroPintores / 16;
    let custoMaoObra: number = dias * numeroPintores * salario;

    let custoFinal: number = custoTinta + custoMaoObra;

    return custoFinal;
}

export function getCustoTinta(custoLitro: number, rendLitro: number, area: number): number {
    let custoTinta: number = custoLitro * (area / rendLitro);
    return custoTinta;
}

export function getNumeroPintores(area: number): number {
    if (area <= 0)
        throw new RangeError('Area tem de ser maior que zero');

    let pintores: number = 4;

    if (area < 100) {
        pintores = 1;
    } else {
        if (area < 300) {
            pintores = 2;
        } else {
            if (area < 1000) {
                pintores = 3;
            }
        }
    }

    return pintores;
}