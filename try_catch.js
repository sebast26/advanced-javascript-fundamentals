(function() {
    try {
        alert("This code will execute!");
        abert("This code will fail");
        alert("This code will not be executed!");
    } catch (err) {
        alert("An error occurred!");
        alert(err.message);
    } finally {
        alert("This code will always execute!");
    }
}());