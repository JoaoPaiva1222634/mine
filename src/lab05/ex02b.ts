import { EncapsulatedArray } from "./ex01b";

class EncapsulatedMatrix {

    //fields

    private matrix: EncapsulatedArray[];

    //constructor

    //b) Construtor público que permita inicializar o array encapsulado com alguns valores. (**)
    public constructor(matrix: number[][]) {

        this.matrix = [];

        for (let row = 0; row < matrix.length; row++) {
            this.matrix[row] = new EncapsulatedArray(matrix[row]);
        }
    }

    //functions

    //alternative solution
    addNewElementToMatrix(newElement: number, rowIndex: number): void {
        this.matrix[rowIndex].addNewElement(newElement)
    }


    //d) Retorne True caso o array bidimensional esteja vazio e False em caso contrário. (*)
    checkIfMatrixIsEmpty(): boolean {

        let matrixIsEmpty: boolean = true;

        for (let row = 0; row < this.matrix.length && matrixIsEmpty; row++) {

            if (!this.matrix[row].checkIfArrayIsEmpty())
                matrixIsEmpty = false
        }

        return matrixIsEmpty;
    }


    //e) Retorne o maior elemento do array. (**)
    getBiggestElementOfMatrix(): number {

        let biggestElementOfMatrix: number = this.matrix[0].getBiggestElementOfArray();

        for (let row = 0; row < this.matrix.length; row++) {

            if (biggestElementOfMatrix < this.matrix[row].getBiggestElementOfArray())
                biggestElementOfMatrix = this.matrix[row].getBiggestElementOfArray();
        }

        return biggestElementOfMatrix;
    }


    //f) Retorne o menor elemento do array. (**)
    getSmallestElementOfMatrix(): number {

        let smallestElementOfMatrix: number = this.matrix[0].getSmallestElementOfArray();

        for (let row = 0; row < this.matrix.length; row++) {

            if (smallestElementOfMatrix > this.matrix[row].getSmallestElementOfArray())
                smallestElementOfMatrix = this.matrix[row].getSmallestElementOfArray();
        }

        return smallestElementOfMatrix;
    }


    //g) Retorne a média dos elementos do array. (**)
    getAverageOfElementsOfMatrix(): number {

        let averageOfAllElementsOfMatrix: number = 0;
        let sumOfAllElementOfMatrix: number = 0;
        let numberOfAllElementsOfMatrix: number = 0;

        for (let row = 0; row < this.matrix.length; row++) {

            numberOfAllElementsOfMatrix += this.matrix[row].getNumberOfElementsOfArray();

            for (let column = 0; column < this.matrix[row].getNumberOfElementsOfArray(); column++) {
                sumOfAllElementOfMatrix += this.matrix[row].getValueAccordingToIndex(column)
            }
        }

        averageOfAllElementsOfMatrix = sumOfAllElementOfMatrix / numberOfAllElementsOfMatrix;

        return averageOfAllElementsOfMatrix;
    }


    //h) Retorne um array em que cada posição corresponde à soma dos elementos da coluna homóloga do array encapsulado. (**)
    getArraySumOfElementsInColumnOfMatrix(): number[] {

        let sumOfElementsInColumn: number = 0;
        let arraySumOfElementsInColumnOfMatrix: number[] = [];
        let matrixBiggestRowLength: number = this.matrix[0].getNumberOfElementsOfArray();
        let currentValue: number = 0;

        matrixBiggestRowLength = this.getLengthOfBiggestRow(matrixBiggestRowLength);

        for (let row = 0; row < matrixBiggestRowLength; row++) {
            sumOfElementsInColumn = 0;

            for (let column = 0; column < this.matrix.length; column++) {
                currentValue = this.matrix[column].getValueAccordingToIndex(row);

                if (currentValue != undefined)
                    sumOfElementsInColumn += currentValue;
            }
            
            arraySumOfElementsInColumnOfMatrix.push(sumOfElementsInColumn)
        }

        return arraySumOfElementsInColumnOfMatrix;
    }

    private getLengthOfBiggestRow(matrixBiggestRowLength: number) {
        for (let matrixRow = 0; matrixRow < this.matrix.length; matrixRow++) {
            if (this.matrix[matrixRow].getNumberOfElementsOfArray() > matrixBiggestRowLength)
                matrixBiggestRowLength = this.matrix[matrixRow].getNumberOfElementsOfArray();
        }
        return matrixBiggestRowLength;
    }
}

let testMatrix: EncapsulatedMatrix = new EncapsulatedMatrix([[4, 5, 33, 1, 2], [1, 2, 3, 5], [4, 6, 4]])

console.log(testMatrix.getArraySumOfElementsInColumnOfMatrix())