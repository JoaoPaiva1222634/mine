import { getDescricao } from "../../lab03/ex03";
import { isNotBetweenOneAndFifteen } from "../../lab03/ex03";

describe('Testing if receiving a code of a product return a description.', () => {
    test('negative should throw error', () => {
        expect(() => {
            getDescricao(2.5);
        }).toThrow('Codigo is not an integer');
    });

    test('Given a code 0 should return the message "Código Inválido" ', () => {
        //Arrange
        let code: number = 0;
        let expectededResult: string = "Código Inválido";

        //Act
        let functionResult = getDescricao(code);

        //Assert
        expect(functionResult).toBe(expectededResult);
    });
});

test('Given a code 16 should return the message "Código Inválido"', () => {
    //Arrange
    let code: number = 16;
    let expectededResult: string = "Código Inválido";

    //Act
    let functionResult = getDescricao(code);

    //Assert
    expect(functionResult).toBe(expectededResult);
});

test('Given a code 15 should return the message "Limpeza e utensílios domésticos"', () => {
    //Arrange
    let code: number = 15;
    let expectededResult: string = "Limpeza e utensílios domésticos";

    //Act
    let functionResult = getDescricao(code);

    //Assert
    expect(functionResult).toBe(expectededResult);
});

test('Given a code 8 should return the message "Limpeza e utensílios domésticos"', () => {
    //Arrange
    let code: number = 8;
    let expectededResult: string = "Limpeza e utensílios domésticos";

    //Act
    let functionResult = getDescricao(code);

    //Assert
    expect(functionResult).toBe(expectededResult);
});

test('Given a code 7 should return the message "Higiene pessoal"', () => {
    //Arrange
    let code: number = 7;
    let expectededResult: string = "Higiene pessoal";

    //Act
    let functionResult = getDescricao(code);

    //Assert
    expect(functionResult).toBe(expectededResult);
});

test('Given a code 6 should return the message "Vestuário"', () => {
    //Arrange
    let code: number = 6;
    let expectededResult: string = "Vestuário";

    //Act
    let functionResult = getDescricao(code);

    //Assert
    expect(functionResult).toBe(expectededResult);
});

test('Given a code 5 should return the message "Vestuário"', () => {
    //Arrange
    let code: number = 5;
    let expectededResult: string = "Vestuário";

    //Act
    let functionResult = getDescricao(code);

    //Assert
    expect(functionResult).toBe(expectededResult);
});

test('Given a code 4 should return the message "Alimento perecível"', () => {
    //Arrange
    let code: number = 4;
    let expectededResult: string = "Alimento perecível";

    //Act
    let functionResult = getDescricao(code);

    //Assert
    expect(functionResult).toBe(expectededResult);
});

test('Given a code 2 should return the message "Alimento perecível"', () => {
    //Arrange
    let code: number = 2;
    let expectededResult: string = "Alimento perecível";

    //Act
    let functionResult = getDescricao(code);

    //Assert
    expect(functionResult).toBe(expectededResult);
});

test('Given a code 1 should return the message "Alimento não perecível"', () => {
    //Arrange
    let code: number = 1;
    let expectededResult: string = "Alimento não perecível";

    //Act
    let functionResult = getDescricao(code);

    //Assert
    expect(functionResult).toBe(expectededResult);
});


describe('Testing if receiving a code of a product return a description.', () => {

test('Given a code 16 should return true', () => {
//Arrange
let code: number = 16;
let expectededResult: boolean = true;

//Act
let functionResult = isNotBetweenOneAndFifteen(code);

//Assert
expect(functionResult).toBe(expectededResult);
});

test('Given a code 0 should return true', () => {
//Arrange
let code: number = 0;
let expectededResult: boolean = true;

//Act
let functionResult = isNotBetweenOneAndFifteen(code);

//Assert
expect(functionResult).toBe(expectededResult);
});

test('Given a code 15 should return false', () => {
//Arrange
let code: number = 15;
let expectededResult: boolean = false;

//Act
let functionResult = isNotBetweenOneAndFifteen(code);

//Assert
expect(functionResult).toBe(expectededResult);
});
});