/*
Pretende-se calcular o salário semanal de um empregado. Sabe-se que o número
de horas semanais de trabalho são 36 e que o valor por hora é de 7,5€.
Se o empregado fizer horas extras (mais de 36 horas) recebe 10€ por cada uma das
5 primeiras horas extra e 15€ por cada uma das restantes horas extra. Elabore uma solução
(métodos + testes) que calcule e retorne o salário semanal de um empregado a partir do no de horas que este trabalhou.
*/

export function getWeeklySalary(hours: number): number {
    if (hours < 0)
        throw new RangeError('Hours must not be negative');

    let weeklySalary: number = hours * 7.5;

    if (hours > 36) {
        let overtime: number = hours - 36;
        let extraPay: number = overtime * 10;
        let bonusPay: number = 5 * 10 + (overtime - 5) * 15;

        if (overtime > 5) {
            extraPay = bonusPay;
        }

        weeklySalary = 36 * 7.5 + extraPay;
    }

    return weeklySalary;
}

