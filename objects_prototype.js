// constructor function
var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

// prototype functions are shared between object's instances
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};
Person.prototype.greet = function(person) {
    if (person instanceof Person) {
        return "Hello, " + person.getFullName();
    } else {
        return "Hello, there!";
    }
};

var person = new Person("Sebastian", "Górecki"),
    person2 = new Person("Ania", "Górecka");

alert(person.greet(person2));