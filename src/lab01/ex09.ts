export function getDistPercZe (distManuel: number, horasManuel: number, minutosManuel: number, segundosManuel: number, horasZe: number, minutosZe: number, segundosZe: number): number {

    let tempoManuelSeg: number = getTempoSeg (horasManuel, minutosManuel, segundosManuel);
    let tempoZeSeg: number = getTempoSeg (horasZe, minutosZe, segundosZe);
    
    let velocManuel: number = distManuel/tempoManuelSeg;

    let distPercZe: number =  Math.trunc((velocManuel * tempoZeSeg) / 1000);

    return distPercZe;
}

export function getTempoSeg (horas: number, minutos:number, segundos: number): number {

    let tempSeg: number = horas * 3600 + minutos * 60 + segundos;

    return tempSeg;
}