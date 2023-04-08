/**
 * 
 * @param x numero de metros ou segundos
 * @param unidade recebe a unidade metros "m" ou segundos "s" 
 * @returns retorna a distancia do relampago em metros ou há quanto tempo caiu o relampago em segundos
 */

export function getThunder2(x: number, unidade: string): number {
    const vSom: number = 340;

    if (unidade != "m" && unidade != "s")
        throw new RangeError('A função apenas aceita metros ou segundos!')

    let formula: number = x * vSom;

    if (unidade == "m") {
        formula = +(x / vSom).toFixed(2);
    }

    return formula;
}