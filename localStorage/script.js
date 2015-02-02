(function() {
    localStorage.firstName = "Sebastian";
    localStorage.setItem("lastName", "Górecki");

    alert(localStorage.getItem("firstName") + " " + localStorage.lastName);

    // removing items
    localStorage.to_delete = "item to delete";
    localStorage.removeItem("to_delete");

    // removing all key-values
    localStorage.clear();


    // all values are converted to Strings
    localStorage.age = 31;
    alert(typeof localStorage.age === "string");


    // storing objects in localStorage
    var person = {
        firstName: "Sebastian",
        lastName: "Górecki",
        age: 31
    };
    localStorage.person = JSON.stringify(person);
    var personObj = JSON.parse(localStorage.person);
    alert(personObj.firstName + " " + personObj.lastName);

}());