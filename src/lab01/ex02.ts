export function preco(nRosas: number, nTulipas: number, pRosas: number, pTulipas: number) {
    let pFinal: number = nRosas * pRosas + nTulipas * pTulipas
    return pFinal;
}