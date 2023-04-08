export function getPercent(nRapazes:number, nRaparigas:number): [number, number] {
    let total:number = nRapazes + nRaparigas;

    if (total == 0) 
        throw new RangeError('Total de rapazes e raparigas não pode ser zero')
    
    let percRapaz: number = nRapazes/total;
    let percRapariga: number = nRaparigas/total
    
    //console.log("percentagem de rapazes = " + percRapaz);
    //console.log("percentagem de raparigas = " + percRapariga);
    return [percRapaz, percRapariga];
}

