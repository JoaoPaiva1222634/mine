/*
Cálculo da distância entre dois operários

Dois operários mantêm um poste vertical esticando dois cabos de aço: um com 40 m de comprimento
e o outro com 60 m. Os cabos fazem entre si um ângulo de 60o. Calcula a distância a que se encontram os dois operários.

Na trigonometria, a lei dos cossenos ou Teorema de Carnot, relaciona os comprimentos dos lados
de um triângulo ao cosseno de um de seus ângulos.

c**2 = a**2 + b**2 - 2ab cos Y

angulo em radianos 60 * (pi/180)
*/

export function getDistOp(a: number, b: number, aGrau: number):number {
    let aConvertido: number = getAngRad(aGrau);
    let distOp: number = +((a**2 + b**2 - 2 * a * b * Math.cos(aConvertido))**(1/2)).toFixed(3);
    return distOp;
}

export function getAngRad(aGrau: number): number {
    const pi: number = 3.14;
    let aRad: number = +(aGrau * (pi/180)).toFixed(3);
    return aRad;
}