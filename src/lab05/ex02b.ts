import { EncapsulatedArray } from "./ex01b";
import { getPrimaryDiagonalOfMatrix } from "../lab04/ex17g";
import { getSecondaryDiagonalOfMatrix } from "../lab04/ex17h";

export class EncapsulatedMatrix {

    //fields

    public matrix: EncapsulatedArray[];

    //constructor

    //b) Construtor público que permita inicializar o array encapsulado com alguns valores. (**)
    public constructor(matrix: number[][]) {

        this.matrix = [];

        for (let row = 0; row < matrix.length; row++) {
            this.matrix[row] = new EncapsulatedArray(matrix[row]);
        }
    }

    //functions

    //c) Adicione um novo elemento (valor) ao array encapsulado numa determinada linha, criando assim uma nova coluna nessa linha. (**)
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


    //i) Retorne True se o array encapsulado corresponde a uma matriz quadrada. (**)
    checkIfMatrixIsSquare(): boolean {

        let matrixIsSquare: boolean = true;
        let numberOfRows: number = this.matrix.length
        let numberOfColumns: number = this.matrix[0].getNumberOfElementsOfArray()

        for (let row = 0; row < this.matrix.length && matrixIsSquare; row++) {

            numberOfColumns = this.matrix[row].getNumberOfElementsOfArray();

            if (numberOfRows != numberOfColumns)
                matrixIsSquare = false;
        }
        return matrixIsSquare;
    }


    //j) Retorne a quantidade de elementos não nulos na diagonal principal da matriz (se quadrada). Devolva -1 se a matriz não for quadrada. (**)
    getAmountOfNotNullNumbersInPrimaryDiagonal(): number {

        let amountOfNotNullNumbersInPrimaryDiagonal: number = -1;
        let row: number = 0;
        let numberOfColumns: number = this.matrix[row].getNumberOfElementsOfArray();

        if (this.checkIfMatrixIsSquare()) {
            amountOfNotNullNumbersInPrimaryDiagonal = 0;

            for (; row < this.matrix.length; row++) {
                for (let column = 0; column < numberOfColumns; column++) {

                    if (row == column && this.matrix[row].getValueAccordingToIndex(column) != 0)
                        amountOfNotNullNumbersInPrimaryDiagonal++;
                }
            }
        }

        return amountOfNotNullNumbersInPrimaryDiagonal;
    }


    //k) Retorne True caso a diagonal principal e a secundária sejam iguais, i.e., tenham os mesmos elementos e pela mesma ordem. (***)
    checkIfPrimaryAndSecondaryDiagonalsAreEqual(): boolean {

        let primaryAndSecondaryDiagonalsAreEqual: boolean = false;

        if (this.checkIfMatrixIsSquare()) {

            let numberOfRows: number = this.matrix.length;
            let numberOfColumns: number = this.matrix[0].getNumberOfElementsOfArray();
            let matrixToCheck: number[][] = [[]];

            for (let row = 0; row < numberOfRows; row++) {
                matrixToCheck[row] = [];
                for (let column = 0; column < numberOfColumns; column++)
                    matrixToCheck[row][column] = this.matrix[row].getValueAccordingToIndex(column)
            }

            let primaryDiagonalOfMatrix: number[] = getPrimaryDiagonalOfMatrix(matrixToCheck);
            let secondaryDiagonalOfMatrix: number[] = getSecondaryDiagonalOfMatrix(matrixToCheck);
            primaryAndSecondaryDiagonalsAreEqual = true;
            let index: number = 0;

            do {
                if (primaryDiagonalOfMatrix[index] != secondaryDiagonalOfMatrix[index])
                    primaryAndSecondaryDiagonalsAreEqual = false;

                index++;
            } while (primaryAndSecondaryDiagonalsAreEqual === true && index < numberOfColumns)
        }

        return primaryAndSecondaryDiagonalsAreEqual;
    }
}