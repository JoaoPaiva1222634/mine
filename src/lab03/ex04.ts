export function getClassif(grade: number): string {
    if (grade < 0 || grade > 20)
        throw new RangeError('Insert grade between 0 and 20');


    const gradeQ: string[] = ["Mau", "Medíocre", "Suficiente", "Bom", "Muito Bom"];
    let i: number = 4;

    if (grade <= 4) {
        i = 0;
    } else {
        if (grade <= 9) {
            i = 1;
        } else {
            if (grade <= 13) {
                i = 2;
            } else {
                if (grade <= 17) {
                    i = 3;
                }
            }
        }
    }

    return gradeQ[i];
}