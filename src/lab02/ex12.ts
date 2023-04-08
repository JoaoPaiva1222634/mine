/*
Construa uma solução (métodos + testes) que permita calcular o preço de saldo de um artigo. 
Os descontos variam em função do preço, conforme se mostra na tabela abaixo.

    PREÇO               DESCONTO
preço > 200                 60%
100 < preço <= 200          40%
50 < preço <= 100           30%
preço <= 50                 20%
*/

export function getPrSald(preco: number): number {
    if (preco <= 0) 
        throw new RangeError ('Introduza um preço válido');

    let desconto60: number = preco * 0.6;
    let desconto40: number = preco * 0.4;
    let desconto30: number = preco * 0.3;
    let desconto20: number = preco * 0.2;

    let prSaldo: number = preco - desconto60;

    if (preco <= 50) {
        prSaldo = preco - desconto20;
    } else {
        if (preco <= 100) {
            prSaldo = preco - desconto30;
        } else {
            if (preco <= 200) {
                prSaldo = preco - desconto40
            }
        }
    }
    
    return prSaldo;
}