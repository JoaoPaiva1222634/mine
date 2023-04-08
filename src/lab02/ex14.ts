/*
O departamento que controla o índice de poluição do meio ambiente mantém 3 grupos de indústrias
que são altamente poluentes do meio ambiente. O índice de poluição aceitável varia de 0 até 0,3.
Se  o  índice  subir  para  além  de  0,3  as  indústrias  do  1º  grupo  são  intimadas  a 
suspenderem  as  suas atividades, se o índice crescer para além de 0,4 as indústrias do 1º
e 2º grupo são intimadas a suspenderem as suas atividades e se o índice superar os 0,5 os 3 grupos
devem ser notificados a paralisarem as suas atividades. Elabore uma solução (métodos + testes) que
recebe o índice de poluição medido e retorna a notificação apropriada.
*/


export function getNotif(indice: number): string {
    if (indice < 0)
        throw new RangeError ('Valor não pode ser negativo');

    let notif: string;

    if (indice > 0.5) {
        notif = "Todas as indústrias deverão interromper as suas actividades";
    } else {
        if (indice > 0.4) {
            notif = "As indústrias do 1º e 2º grupo deverão interromper as suas actividades";
        } else {
            if (indice > 0.3) {
                notif = "As indústria do 1º grupo deverão interromper as suas actividades";
            } else {
                notif = "Todas as indústrias podem proceder com as suas actividades";
            }
        }
    }

    return notif;
}