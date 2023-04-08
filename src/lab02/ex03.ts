/*
Crie uma função que, tendo como dados de entrada dois pontos num plano
P(x1, y1) e P(x2, y2) calcule a distância entre eles. A fórmula da determinação
da distância entre dois pontos é:

d = Math.sqrt((x2-x1)**2 + (y2-y1)**2))
*/

export function getDistancia(x1: number, x2: number, y1: number, y2: number): number {
    let distancia: number = +(Math.sqrt((x2-x1)**2 + (y2-y1)**2)).toFixed(3);
    return distancia;    
}