

let mySecondPerson = {
    firstName: "Jane",
    bisthYear: 1975,
    age: function () {
        return new Date().getFullYear() - this.bisthYear;
    }
}




console.log(mySecondPerson);

console.log(mySecondPerson.age());