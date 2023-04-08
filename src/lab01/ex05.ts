export function hipotenusa (cateto1: number, cateto2:number): number {
    let hip: number = (cateto1**2 + cateto2**2)**(1/2);
    
    return hip;
}