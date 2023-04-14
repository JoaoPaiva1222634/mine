export function getMonthlySalary(baseSalary: number, overtime: number) {
    let overtimePerHour: number = baseSalary * 0.02;
    let overtimePayment: number = overtime * overtimePerHour;
    let monthlySalary: number = baseSalary + overtimePayment;

    return monthlySalary;
}


console.log(getMonthlySalary(500,2))