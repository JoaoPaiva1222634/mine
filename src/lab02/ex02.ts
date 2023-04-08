export function getNotaBol (nota: number): boolean {
    if (nota < 0) 
        throw new RangeError('A nota não pode ter um valor negativo');
    
    if (nota >= 8) {
        return true;
    } else {
        return false;
    }
}