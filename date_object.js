var now = new Date();

var someDate = new Date(1984, 1, 18, 22, 5); // 1984-02-18 22:05

var year = someDate.getFullYear(); // 1984
var month = someDate.getMonth(); // 1 (February)
var day = someDate.getDate(); // 18
var dayCount = someDate.getDay(); // 6 - Saturday

var hours = someDate.getHours();
var minutes = someDate.getMinutes();
var seconds = someDate.getSeconds();
var timestamp = someDate.getTime(); // timestamp


// date manipulations
someDate.setMonth(someDate.getMonth() + 3); // May
