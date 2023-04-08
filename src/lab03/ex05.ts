export function calculateNetSalary(grossSalary: number): number {
    let netSalary: number = grossSalary * 0.8;

    if (grossSalary <= 500) {
        netSalary = grossSalary * 0.9;
    }
    else{
        if (grossSalary <= 1000) {
            netSalary = grossSalary * 0.85;
        }
    }
    return netSalary;
};