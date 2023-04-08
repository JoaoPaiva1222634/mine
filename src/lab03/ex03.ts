export function getDescricao(codigo: number): string {
    let tabela: string[] = ["Alimento não perecível", "Alimento perecível", "Vestuário", "Higiene pessoal", "Limpeza e utensílios domésticos", "Código Inválido"];
    let descricao: string = tabela[4];

    if (!Number.isInteger(codigo)) {
        throw Error('Codigo is not an integer');
    }

    if (isNotBetweenOneAndFifteen(codigo)) {
        descricao = tabela[5];
    } else if (codigo == 7) {
        descricao = tabela[3];
    } else if (codigo >= 5 && codigo <= 6) {
        descricao = tabela[2];
    } else if (codigo >= 2 && codigo <= 4) {
        descricao = tabela[1];
    } else if (codigo == 1) {
        descricao = tabela[0];
    }
    return descricao;
}

export function isNotBetweenOneAndFifteen(codigo: number): boolean {
    return codigo < 1 || codigo > 15;
}