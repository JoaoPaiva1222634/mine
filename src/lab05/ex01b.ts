import { getNonRepeatingElementsOfArray } from "../lab04/ex13e";
import { getNumberOfEvenDigits } from "../lab03/ex08b";
import { getNumberOfDigits } from "../lab03/ex08a";
import { getDigitsOfNumberIntoArray } from "../lab04/ex02";
import { checkIfNumberIsPalindrome } from "../lab03/ex09a";
import { checkIfValueIsAnArmstrongNumber } from "../lab03/ex09b";

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
  getAverageOfAllElementsOfArray(): number {
    let sumOfAllElements: number = 0;
    let numberOfElements: number = this.array.length;

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

    if (this.array.length != 0) {
      do {

        smallestElementOfArray = this.getSmallestElementOfArray();
        elementsInAscendingOrder.push(smallestElementOfArray)
        this.removeFirstElementEqualToValue(smallestElementOfArray);

      } while (this.array.length != 0)
    }

    this.array = elementsInAscendingOrder;
  }


  //n) Ordene os valores do array por ordem descendente. (***)
  orderArrayElementsInDescendingOrder(): void {

    let elementsInDescendingOrder: number[] = [];
    let biggestElementOfArray: number = 0;

    if (this.array.length != 0) {
      do {

        biggestElementOfArray = this.getBiggestElementOfArray();
        elementsInDescendingOrder.push(biggestElementOfArray)
        this.removeFirstElementEqualToValue(biggestElementOfArray);

      } while (this.array.length != 0)
    }

    this.array = elementsInDescendingOrder;
  }


  //o) Retorne True caso o array esteja vazio e False em caso contrário. (*)
  checkIfArrayIsEmpty(): boolean {
    let arrayIsEmpty: boolean = false;

    if (this.array.length == 0)
      arrayIsEmpty = true;

    return arrayIsEmpty;
  }


  //p) Retorne True caso o array contenha apenas um elemento e False em caso contrário. (*)
  checkIfArrayHasOnlyOneElement(): boolean {
    let arrayHasOnlyOneElement: boolean = false;

    if (this.array.length == 1)
      arrayHasOnlyOneElement = true;

    return arrayHasOnlyOneElement;
  }


  //q) Retorne True se o array tiver apenas elementos pares e False em caso contrário. (**)
  checkIfArrayHasOnlyEvenElements(): boolean {
    let arrayHasOnlyEvenElements: boolean = false;
    let numberOfEvenElements: number = 0;

    if (this.array.length != 0) {
      for (let i = 0; i != this.array.length; i++)
        if (this.array[i] % 2 == 0)
          numberOfEvenElements++;

      if (numberOfEvenElements == this.array.length)
        arrayHasOnlyEvenElements = true;
    }

    return arrayHasOnlyEvenElements;
  }


  //r) Retorne True se o array tiver apenas elementos ímpares e False em caso contrário. (**)
  checkIfArrayHasOnlyOddElements(): boolean {
    let arrayHasOnlyOddElements: boolean = false;
    let numberOfOddElements: number = 0;

    if (this.array.length != 0) {
      for (let i = 0; i != this.array.length; i++)
        if (this.array[i] % 2 != 0)
          numberOfOddElements++;

      if (numberOfOddElements == this.array.length)
        arrayHasOnlyOddElements = true;
    }

    return arrayHasOnlyOddElements;
  }


  //s) Retorne True se o array tiver elementos duplicados e False em caso contrário. (****)
  checkIfArrayHasRepeatingElements(): boolean {
    let arrayHasRepeatingElements: boolean = false

    if (getNonRepeatingElementsOfArray(this.array).length != this.array.length)
      arrayHasRepeatingElements = true;

    return arrayHasRepeatingElements;
  }


  //t) Retorne os elementos do array cujo número de algarismos é superior ao número médio de algarismos de todos os elementos do array. (***)
  getElementsBiggerThanAverageValue(): number[] {

    let elementsBiggerThanAverageValue: number[] = [];

    for (let i = 0; i != this.array.length; i++)
      if (this.array[i] > this.getAverageOfAllElementsOfArray())
        elementsBiggerThanAverageValue.push(this.array[i])

    return elementsBiggerThanAverageValue;
  }


  //u) Retorne os elementos do array compostos exclusivamente por algarismos pares. (***)
  getElementsComposedOnlyByEvenDigits(): number[] {
    let elementsComposedOnlyByEvenDigits: number[] = [];

    for (let i = 0; i != this.array.length; i++)
      if (getNumberOfEvenDigits(this.array[i]) == getNumberOfDigits(this.array[i]))
        elementsComposedOnlyByEvenDigits.push(this.array[i])

    return elementsComposedOnlyByEvenDigits;
  }


  //v) Retorne os elementos que são sequências crescentes (e.g. 347) do array. (**)
  getElementsThatAreAscendingSequences(): number[] {

    let elementsThatAreAscendingSequences: number[] = [];
    let elementIntoArray: number[] = [];

    for (let index = 0; index < this.array.length; index++) {

      let elementIsAscendingSequence: boolean = true;
      elementIntoArray = getDigitsOfNumberIntoArray(this.array[index]);

      if (elementIntoArray.length > 1) {
        for (let digitIndex = 1; digitIndex < elementIntoArray.length && elementIsAscendingSequence; digitIndex++) {
          if (elementIntoArray[digitIndex] <= elementIntoArray[digitIndex - 1])
            elementIsAscendingSequence = false;
        }

        if (elementIsAscendingSequence)
          elementsThatAreAscendingSequences.push(this.array[index]);
      }
    }

    return elementsThatAreAscendingSequences;
  }


  //w) Retorne as capicuas existentes no array. (**)
  getElementsThaArePalindromes(): number[] {

    let elementsThatArePalindromes: number[] = [];

    for (let elementOfArray of this.array) {
      let numberIsPalindrome: boolean = checkIfNumberIsPalindrome(elementOfArray)

      if (numberIsPalindrome)
        elementsThatArePalindromes.push(elementOfArray)
    }

    return elementsThatArePalindromes
  }


  //x) Retorne os números existentes no array compostos exclusivamente por um mesmo algarismo (e.g., 222). (**)
  getElementsThatAreComposedExclusivelyByTheSameDigit(): number[] {

    let elementsThatAreComposedExclusivelyByTheSameDigit: number[] = [];
    let elementIntoArray: number[] = [];

    for (let elementOfArray of this.array) {
      let elementIsComposedExclusivelyByTheSameDigit: boolean = true;
      elementIntoArray = getDigitsOfNumberIntoArray(elementOfArray);

      for (let index = 1; index < elementIntoArray.length && elementIsComposedExclusivelyByTheSameDigit; index++) {
        if (elementIntoArray[index] != elementIntoArray[index - 1])
          elementIsComposedExclusivelyByTheSameDigit = false;
      }

      if (elementIsComposedExclusivelyByTheSameDigit)
        elementsThatAreComposedExclusivelyByTheSameDigit.push(elementOfArray);
    }

    return elementsThatAreComposedExclusivelyByTheSameDigit;
  }


  //y) Retorne os números existentes no array que não são de Amstrong. (**)
  getElementsThatAreNotArmstrongNumbers(): number[] {

    let elementsThatAreNotArmstrongNumbers: number[] = [];
    let elementIsArmstrongNumber: boolean;
    let index: number = 0;

    do {

      elementIsArmstrongNumber = checkIfValueIsAnArmstrongNumber(this.array[index])

      if (!elementIsArmstrongNumber)
        elementsThatAreNotArmstrongNumbers.push(this.array[index])

      index++;

    } while (index < this.array.length)

    return elementsThatAreNotArmstrongNumbers;
  }


  //z) Retorne os elementos que contêm uma sequência crescente de pelo menos n algarismos (e.g., n=3, 347). (***)
  getElementsThatAreAscendingSequenceOfAtLeastNDigits(n: number): number[] {

    let elementsThatAreAscendingSequenceOfAtLeastNDigits: number[] = [];
    let elementsThatAreAscendingSequences: number[] = this.getElementsThatAreAscendingSequences();
    let elementIntoArray: number[] = [];

    for (let elementOfArray of elementsThatAreAscendingSequences) {
      elementIntoArray = getDigitsOfNumberIntoArray(elementOfArray)

      if (elementIntoArray.length >= n)
        elementsThatAreAscendingSequenceOfAtLeastNDigits.push(elementOfArray)
    }

    return elementsThatAreAscendingSequenceOfAtLeastNDigits;
  }


  //aa) Retorne True ou False, consoante o array é igual a um array passado por parâmetro. (**)
  checkIfArrayIsTheSameAsEntryArray(entryArray: number[]): boolean {

    let arrayIsTheSameAsEntryArray: boolean = true;

    if (this.array.length != entryArray.length) {
      arrayIsTheSameAsEntryArray = false;

    } else {
      
      for (let index = 0; index < this.array.length && arrayIsTheSameAsEntryArray; index++) {
        if (this.array[index] != entryArray[index])
          arrayIsTheSameAsEntryArray = false;
      }
    }

    return arrayIsTheSameAsEntryArray;
  }
}

//let newArray: EncapsulatedArray = new EncapsulatedArray([468, 245, 238, 456, 432])
//console.log(newArray.getElementsThatAreAscendingSequences())