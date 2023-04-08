export function getTurma(aprovados: number) {
    let resultado: string;

    if (aprovados < 0 || aprovados > 1) {
        resultado = "Valor Inválido"
    } else {
        if (aprovados < 0.2) {
            resultado = "Turma Má"
        } else {
            if (aprovados < 0.5) {
                resultado = "Turma Fraca"
            } else {
                if (aprovados < 0.7) {
                    resultado = "Turma Razoável"
                } else {
                    if (aprovados < 0.9) {
                        resultado = "Turma Boa"
                    } else {
                        resultado = "Turma Excelente"
                    }
                }
            }
        }
    }

    return resultado;
}