/*
Elabore uma solução (métodos + testes) para apoio à CP que permita indicar a hora de chegada
de um determinado comboio (horas e minutos), conhecida a hora de partida (horas e minutos) e a
duração da viagem (horas e minutos). Na informação de retorno deve ainda ser indicado se o comboio
chega no próprio dia ou no dia seguinte. Considere que a duração da viagem nunca é superior a 24 horas.
*/

export function getFinal(hPartida: number, mPartida: number, dHoras: number, dMinutos: number): string {
    let chegadaSeg: number = (getConvertSeg(hPartida, mPartida)) + (getConvertSeg(dHoras, dMinutos));
    let chegadaConv = getConvertHoras(chegadaSeg);
    let chegadaDia: string = getDia(chegadaConv[0], chegadaConv[1]);

    return chegadaDia;
}

export function getConvertSeg(horas: number, minutos: number): number {
    return horas * 3600 + minutos * 60;
}

export function getConvertHoras(segundos: number): [number, number] {
    let hConvertido: number = Math.trunc(segundos / 3600);
    let mConvertido: number = (segundos % 3600) / 60;

    return [hConvertido, mConvertido];
}

export function getDia(hConvertido: number, mConvertido: number): string {
    let hFinal: number = hConvertido;
    let dia: string = `O comboio chegará no próprio dia às ${hConvertido}:${mConvertido}.`;

    if (hConvertido > 24) {
        hFinal = hConvertido - 24;
        dia = `O comboio chegará no dia seguinte às ${hFinal}:${mConvertido}.`;
    }

    return dia;
}