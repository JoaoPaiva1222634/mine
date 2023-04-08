const aGrav: number = 9.8;

export function getAlturaEdificio (v0: number, t: number) {
  
    if (v0 < 0 || t < 0) 
        throw new RangeError("Usar apenas valores positivos");
    
        let alturaEdificio: number = v0 * t + (aGrav * t**2) / 2;
        return alturaEdificio;
    

}