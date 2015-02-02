(function() {
    var personObj = JSON.parse(localStorage.person);
    alert(personObj.firstName + " " + personObj.lastName);
}());

