export function getAltEd(sombEd: number, sombPes: number, altPes: number): number {
    if (sombEd < 0 || sombPes <= 0 || altPes < 0)
        throw new RangeError("Usar apenas valores positivos e a sombra da pessoa não pode ser 0");

    let altEd: number = sombEd / sombPes * altPes;
    return altEd;
}