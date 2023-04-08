/**
 * 
 * @param euros 
 * @param symbol 
 * @returns 
 */

export function getExchange(euros: number, symbol: string): string {
    let table: number[] = [1.534, 0.774, 161.480, 9.593, 1.601];
    let result: string = `Receberá ${+(euros * table[0]).toFixed(3)} Dólar`;


    if (symbol == "L") {
        result = `Receberá ${+(euros * table[1]).toFixed(3)} Libra`;
    } else if (symbol == "I") {
        result = `Receberá ${+(euros * table[2]).toFixed(3)} Iene`;
    } else if (symbol == "C") {
        result = `Receberá ${+(euros * table[3]).toFixed(3)} Coroa Sueca`;
    } else if (symbol == "F") {
        result = `Receberá ${+(euros * table[4]).toFixed(3)} Franco Suiço`;
    }

    return result;
}