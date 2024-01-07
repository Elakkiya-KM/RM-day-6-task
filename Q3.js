class Person {
  constructor(firstName, lastName, age, gender, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.city = city;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  details() {
    console.log(`Name: ${this.getFullName()}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`City: ${this.city}`);
  }
}

const person1 = new Person("Xperson", "Xlast", 25, "Female", "Coimbatore");
const person2 = new Person("Yperson", "Ylast", 24, "Male", "Bangalore");
const person3 = new Person("Zperson", "Zlast", 23, "Female", "Chennai");

person1.details();
console.log("\n");
person2.details();
console.log("\n");
person3.details();
