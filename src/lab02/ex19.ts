/*
Desenvolva uma solução que sabendo a hora de início de processamento de uma tarefa numa determinada
máquina e o tempo que a tarefa demora a processar, calcule a hora de fim de processamento. O tempo
de início de processamento é indicado em horas, minutos e segundos e o tempo de duração do processamento
em segundos. O tempo de fim de processamento deve ser retornado em horas, minutos e segundos.
*/

/**
 * 
 * @param inicioHoras recebe as horas a que se inicia o processamento
 * @param inicioMinutos recebe os minutos a que se inicia o processamento
 * @param inicioSegundos recebe os segundos a que se inicia o processamento
 * @param duracao recebe a duração do processamento em segundos
 * @returns recebe a hora a que termina o processamento expresso em horas minutos e segundos
 */

export function getFimProc(inicioHoras: number, inicioMinutos: number, inicioSegundos: number, duracao: number): string {
    let segSomado = getInicioSeg(inicioHoras, inicioMinutos, inicioSegundos) + duracao;
    let tempoFim = getConvertHMS(segSomado);

    return `O processamento terminará às ${tempoFim[0]}:${tempoFim[1]}:${tempoFim[2]}`;
}

export function getInicioSeg(horas: number, minutos: number, segundos: number): number {
    let inicioConvert: number = horas * 3600 + minutos * 60 + segundos;

    return inicioConvert;
}

export function getConvertHMS(totalSegundos: number): [number, number, number] {
    let fimHoras: number = Math.trunc(totalSegundos / 3600);
    let fimMinutos: number = Math.trunc((totalSegundos%3600) / 60);
    let fimSegundos: number = (totalSegundos%3600)%60;

    return [fimHoras, fimMinutos, fimSegundos];
}