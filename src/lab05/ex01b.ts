export class EncapsulatedArray {
  public array: number[];

  //b) Construtor público que permita inicializar o array encapsulado com alguns valores. (**)
  constructor(array: number[]) {
    this.array = array;
  }

  //c) Adicione um novo elemento (valor) ao array encapsulado. (*)
  addNewElement(newElement: number): void {
    this.array.push(newElement);
  }

  //d) Retire o primeiro elemento do array encapsulado com um determinado valor. (*)
  removeFirstElementEqualToValue(value: number): void {
    let arrayWithoutElement: number[] = [];
    let elementToRemoveFound: boolean = false;
    let indexOfElementToRemove: number = -1;

    ({ indexOfElementToRemove } = this.getIndexOfElementToRemove(elementToRemoveFound, value, indexOfElementToRemove));

    this.removeElement(indexOfElementToRemove, arrayWithoutElement);

    this.array = arrayWithoutElement;
  }

  private removeElement(indexOfElementToRemove: number, arrayWithoutElement: number[]) {
    for (let j = 0; j != this.array.length; j++) {
      if (j != indexOfElementToRemove) {
        arrayWithoutElement.push(this.array[j]);
      }
    }
  }

  private getIndexOfElementToRemove(elementToRemoveFound: boolean, value: number, indexOfElementToRemove: number) {
    for (let i = 0; i != this.array.length && !elementToRemoveFound; i++) {

      if (this.array[i] == value) {
        elementToRemoveFound = true;
        indexOfElementToRemove = i;
      }
    }
    return { indexOfElementToRemove };
  }

  //e) Retorne o valor de um determinado elemento indicado pela sua posição. (*)
  getValueAccordingToIndex(index: number): number {
    return this.array[index];
  }

  //f) Retorne o número de elementos no array. (*)
  getNumberOfElementsOfArray(): number {
    return this.array.length;
  }

  //g) Retorne o maior elemento do array. (**)
  getBiggestElementOfArray(): number {
    let biggestElementOfArray: number = this.array[0];

    for (let i = 0; i != this.array.length; i++) {
      if (this.array[i] > biggestElementOfArray)
        biggestElementOfArray = this.array[i];
    }

    return biggestElementOfArray;
  }

  //h) Retorne o menor elemento do array. (**)
  getSmallestElementOfArray(): number {
    let smallestElementOfArray: number = this.array[0];

    for (let i = 0; i != this.array.length; i++) {
      if (this.array[i] < smallestElementOfArray)
        smallestElementOfArray = this.array[i];
    }

    return smallestElementOfArray;
  }

  //i) Retorne a média de todos os elementos. (**)
  getAverageOfAllElements(): number {
    let sumOfAllElements: number = 0;
    let numberOfElements: number = this.array.length - 1;

    for (let i = 0; i != this.array.length; i++) {
      sumOfAllElements += this.array[i];
    }

    let averageOfAllElements: number = sumOfAllElements / numberOfElements;

    return averageOfAllElements
  }

  //j) Retorne a média de todos os números pares. (**)
  getAverageOfAllEvenElements(): number {
    let sumOfAllEvenElements: number = 0;
    let numberOfEvenElements: number = 0;

    for (let i = 0; i != this.array.length; i++) {
      if (this.array[i] % 2 == 0) {
        sumOfAllEvenElements += this.array[i];
        numberOfEvenElements++;
      }
    }

    let averageOfAllEvenElements: number = sumOfAllEvenElements / numberOfEvenElements;

    return averageOfAllEvenElements;
  }

  //k) Retorne a média de todos os números ímpares. (**)
  getAverageOfAllOddElements(): number {
    let sumOfAllOddElements: number = 0;
    let numberOfOddElements: number = 0;

    for (let i = 0; i != this.array.length; i++) {
      if (this.array[i] % 2 != 0) {
        sumOfAllOddElements += this.array[i];
        numberOfOddElements++;
      }
    }

    let averageOfAllOddElements: number = sumOfAllOddElements / numberOfOddElements;

    return averageOfAllOddElements;
  }

  //l) Retorne a média de todos os múltiplos de um dado número. (**)
  getAverageOfAllMultiplesOfGivenNumber(numberX: number): number {
    let sumOfAllMultiplesOfGivenNumber: number = 0;
    let numberAllMultiplesOfGivenNumbers: number = 0;

    for (let i = 0; i != this.array.length; i++) {
      if (this.array[i] % numberX == 0) {
        sumOfAllMultiplesOfGivenNumber += this.array[i];
        numberAllMultiplesOfGivenNumbers++;
      }
    }

    let averageOfAllMultiplesOfGivenNumber: number = sumOfAllMultiplesOfGivenNumber / numberAllMultiplesOfGivenNumbers;

    return averageOfAllMultiplesOfGivenNumber;
  }

  //m) Ordene os valores do array por ordem ascendente. (***)
  orderArrayElementsInAscendingOrder(): void {

    let elementsInAscendingOrder: number[] = [];
    let smallestElementOfArray: number = 0;

    do {
      
      smallestElementOfArray = this.getSmallestElementOfArray();
      elementsInAscendingOrder.push(smallestElementOfArray)
      this.removeFirstElementEqualToValue(smallestElementOfArray);

    } while (this.array.length != 0)

    this.array = elementsInAscendingOrder;
  }
}

let newClass: EncapsulatedArray = new EncapsulatedArray([5, 7, 1, 2, 7])
console.log(newClass.orderArrayElementsInAscendingOrder())