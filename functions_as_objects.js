var calculate = function(x, y, fn) {
    return fn(x, y);
};

var sum = function(x, y) {
    return x + y;
};

var diff = function(x, y) {
    return x - y;
};

var sumResult = calculate(1, 2, sum),
    diffResult = calculate(1, 2, diff);

alert(sumResult);
alert(diffResult);