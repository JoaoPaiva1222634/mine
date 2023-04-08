export function getCustoJard(area: number, nArvores: number, nArbustos: number): number {
    if (area <= 0 || nArvores < 0 || nArbustos < 0)
        throw new RangeError ('Apenas valores positivos e a área tem de ser maior que 0');

    let conversaoHoras: number = 3600;
    let custoTrabalhoHora: number = 10;

    let grama: number = (area * 10) + (area * custoTrabalhoHora * 300 / conversaoHoras);
    let arvores: number = (nArvores * 20) + (nArvores * custoTrabalhoHora * 600 / conversaoHoras);
    let arbustos: number = (nArbustos * 15) + (nArbustos * custoTrabalhoHora * 400 / conversaoHoras);

    let custoJard: number = +(grama + arvores + arbustos).toFixed(2);

    return custoJard;
}