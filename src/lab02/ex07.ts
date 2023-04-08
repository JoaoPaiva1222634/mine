/*
Analise o seguinte algoritmo que a partir da área de um cubo expressa em cm2 calcula o seu volume.
INICIO (area: Real)
ED: aresta, volume REAL
       SE (area>0) ENTÃO
             aresta <- RAIZ_QUADRADA(area/6)
             volume <- aresta ^ 3
       SENÃO
             volume <- -1
FIMSE
       RETORNA volume
FIM

a) Implemente o algoritmo acima descrito.
b) Copie o algoritmo e faça as alterações necessárias de modo a devolver a classificação do cubo de
acordo com a seguinte tabela:
<= 1
1 < V <= 2 > 2
Pequeno Médio Grande
VOLUME (dm3)
CLASSIFICAÇÃO
c) Elabore um conjunto de testes unitários que garanta que o(s) processamento(s) é/são corretamente realizado(s).
*/

/**
 * 
 * @param area recebe a area de um bubo
 * @returns retorna a classificação do volume
 */

export function getClassCubo(area: number): string {
      let classCubo: string = getClass(getVol(area));
      return classCubo;
}

/**
 * 
 * @param area recebe a area de um cubo
 * @returns retorna o volume desse cubo
 */

export function getVol(area: number): number {
      let aresta: number = 0;
      let volume: number = 0;

      if (area > 0) {
            aresta = Math.sqrt(area / 6);
            volume = aresta ** 3;
      } else {
            volume = -1;
      }

      return volume;

}

/**
 * 
 * @param volume recebe o volume de um cubo
 * @returns retorna a classificação do volume desse cubo
 */

export function getClass(volume: number): string {
      if (volume == -1)
            throw new RangeError ('Area tem de ser maior que zero')
            
      let classif: string = "Pequeno";

      if (volume > 2) {
            classif = "Grande";
      } else {
            if (volume > 1) {
                  classif = "Médio";
            }
      }
      return classif;
}