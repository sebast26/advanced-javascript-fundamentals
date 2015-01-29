var calculate = function() {
    var fn = Array.prototype.pop.apply(arguments); // returning last argument and remove it from array
    return fn.apply(null, arguments);
};

var sum = function() {
    var total = 0;
    for (var i = 0, len = arguments.length; i < len; i = i + 1) {
        total = total + arguments[i];
    }
    return total;
};

var diff = function() {
    var total = Array.prototype.shift.apply(arguments); // first element of the array and remove it from array
    for (var i = 0, len = arguments.length; i < len; i = i + 1) {
        total = total - arguments[i];
    }
    return total;
};

var sumResult = calculate(1, 2, 3, 4, 5, sum),
    diffResult = calculate(1, 2, 3, 4, 5, diff);

alert(sumResult);
alert(diffResult);