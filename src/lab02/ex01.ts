export function getMedPesada (nota1: number, nota2: number, nota3: number, peso1: number, peso2: number, peso3: number): number {
    let medPesada: number = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
    return medPesada; 
}