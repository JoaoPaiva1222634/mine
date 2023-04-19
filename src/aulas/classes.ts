class Person {

    //fields
    private firstName: string;
    private birthYear: number;

    //constructor
    constructor(firstName: string, birthYear: number) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //functions
    public age(): number {
        return new Date().getFullYear() - this.birthYear;
    }
}

let classInstanceOne = new Person("John", 1975);
let classInstanceTwo = new Person("Mary", 1978);

let myPeople: Person[] = [classInstanceOne, classInstanceTwo];

for (let person of myPeople) {
    console.log(person);
    console.log(person.age());
}